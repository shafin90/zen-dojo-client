import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { app } from "../../../firebase.config";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const authContext = createContext();



const AuthProvider = ({ children }) => {
    //auth for authentication==========
    const auth = getAuth(app);

    //provider for google sign in
    const provider = new GoogleAuthProvider();




    //State declaration=======================
    const [user, setUser] = useState(null);
    const [allUser, setAllUser] = useState([])//This state is to store all user info
    const [instructor, setInstructor] = useState([])// This state is to store instructors 
    const [img, setImg] = useState('');//users img will be stored here.

    //Loading data from database. Filter the data to get only instructors data and set that to instructor state.
    useEffect(() => {
        fetch('http://localhost:5000/gettingUserInfo')
            .then(response => response.json())
            .then(data => setInstructor(data.filter(e => e.status == "instructor")))
    }, [])




    //Loading all users data.
    useEffect(() => {
        fetch('http://localhost:5000/gettingUserInfo')
            .then(response => response.json())
            .then(data => setAllUser(data))
    }, [])













































    // This function handle procedure of creating account using eamil and password
    const handleRegistrationWithEmail = (email, password) => {
        console.log(email, password);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setUser(user);

                // showing succesfull message
                toast.success('Successfully Registered Account!!!', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
            })
            .catch((error) => {
                // Showing succesfull message
                toast.success('Something went wrong. Please try again', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });


            });
    }



    //This function handle the procedure of sign in with email password.
    const handleSignInWithEmail = (email, password) => {
        console.log(email, password)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setUser(user);
                // showing succesfull message
                toast.success('Successfully Logged in!!!', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
            })
            .catch((error) => {
                toast.error('Oops!!! Something is wrong. Please try again', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    });

            });
    }


    //This function handle the procedure of getting sign in by google.
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then((result) => {

                const user = result.user;
                setUser(user);

                // Showing succesfull message
                toast.success('Successfully Logged in by google!!!', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });


                // Sending users information to the database
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ email: user.email, status: 'student', name: user.displayName, img: user.photoURL })
                })
                    .then(res => res.json())
                    .then(data => console.log(data))
            }).catch((error) => {

            });

    }





    //This function handle the procedure to logout user.
    const handleLogout = () => {
        signOut(auth).then(() => {
            setUser(null);
            // showing succesfull message
            toast.success('Logout successfully!!!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }).catch((error) => {
            // An error happened.
        });
    }












    // observer========================================
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);

            } else {
                setUser(null);
            }
        });

        return () => {
            unsubscribe();
        };
    }, []);




    // all value that are being passed other components.
    const passingValue = {
        user,
        allUser,
        handleGoogleSignIn,
        handleRegistrationWithEmail,
        handleSignInWithEmail,
        handleLogout,
        instructor
    }

    return (
        <authContext.Provider value={passingValue}>
            {children}


            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />


        </authContext.Provider>
    );
};

export default AuthProvider;