import { createContext, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { app } from "../../../firebase.config";


export const authContext = createContext();



const AuthProvider = ({ children }) => {
    // auth for authentication==========
    const auth = getAuth(app);

    // provider for google sign in
    const provider = new GoogleAuthProvider();




    // state declaration=======================
    const [user, setUser] = useState(null);






















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




    console.log(user)

    // all value that i am passing to another components=======================================
    const passingValue = {
        user,
        handleGoogleSignIn,
        handleRegistrationWithEmail,
        handleSignInWithEmail,
        handleLogout
    }

    return (
        <authContext.Provider value={passingValue}>
            {children}

        </authContext.Provider>
    );
};

export default AuthProvider;