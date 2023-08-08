import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { app } from "../../../firebase.config";


export const authContext = createContext();



const AuthProvider = ({ children }) => {
    // auth for authentication==========
    const auth = getAuth(app);

    // provider for google sign in
    const provider = new GoogleAuthProvider();




    // state declaration=======================
    const [user, setUser] = useState(null);







    //STATE===============================================
    const [allUser, setAllUser] = useState([])//This state is to store all user info
    const [instructor, setInstructor] = useState([])// This state is to store instructors 

    //LOADING DATA OF ALL USERS.
    useEffect(() => {
        fetch('https://zen-doj-server-shafin90.vercel.app/gettingUserInfo')
            .then(response => response.json())
            .then(data => setInstructor(data.filter(e => e.status == "instructor")))
    }, [])



    
























    // create account using eamil and password==================================================================================================================================================================
    const handleRegistrationWithEmail = (email, password) => {
        console.log(email, password);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setUser(user)
            })
            .catch((error) => {

            });
    }



    // sign in with email password==========================================================================================================================================
    const handleSignInWithEmail = (email, password) => {
        console.log(email, password)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                setUser(user);
                // ...
            })
            .catch((error) => {

            });
    }


    // sign in with google==============================================================================================================================================
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then((result) => {

                const user = result.user;
                setUser(user)


                fetch('https://zen-doj-server-shafin90.vercel.app/users', {
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





    // logout==============================================================================================
    const handleLogout = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            setUser(null)
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


    console.log(user)

    // all value that i am passing to another components=======================================
    const passingValue = {
        user,
        handleGoogleSignIn,
        handleRegistrationWithEmail,
        handleSignInWithEmail,
        handleLogout,
        instructor
    }

    return (
        <authContext.Provider value={passingValue}>
            {children}

        </authContext.Provider>
    );
};

export default AuthProvider;