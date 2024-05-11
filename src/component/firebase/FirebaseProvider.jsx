import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "./firebase.config";
// import { GoogleAuthProvider } from "firebase/auth/cordova";
import { GoogleAuthProvider } from "firebase/auth";



export const AuthContext = createContext(null);
// social
// const googleProvider = new GoogleAuthProvider();
const provider = new GoogleAuthProvider();


const FirebaseProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    const createUser = (email, password) => {
        setLoading(true);

        return createUserWithEmailAndPassword(auth, email, password)
    }

    
    // update user

    const updateUserProfile = (name, image) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: image
        })

    }

    const signInUser = (email, password) => {
        // toast("SUCCESSFULLY LOGIN!");
        setLoading(true);


        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleLogin = () => {
        // toast("SUCCESSFULLY LOGIN!");
        setLoading(true);


       return signInWithPopup(auth, provider)
    }


    // logout
    const logOut = () => {
        // toast("SUCCESSFULLY LOGOUT");
        setUser(null)
        // setLoading(false);


        signOut(auth);
    }


     // observer
     useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                setLoading(false);

            }
        });
        return () => unsubscribe();


    }, [])



    // values
    const allValues = {
        createUser,
        signInUser,
        googleLogin,

        logOut,
        user,
        updateUserProfile,
        loading,
        
    }
    return (
        <AuthContext.Provider value={allValues}>
        {children}
    </AuthContext.Provider>
    );
};

export default FirebaseProvider;