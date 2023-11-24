/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile, } from 'firebase/auth'
import app from "../firebase/firebase.config";

// import { clearCookie } from "../api/authshare";

export const AuthContext = createContext(null)

const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    //createUser 
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //signIn 
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    //googleSignIn 
    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }
    //resetPassword 
    const resetPassword = email => {
        setLoading(true)
        return sendPasswordResetEmail(auth, email)
    }
    //logOut 
    const logOut = async() => {
        setLoading(true)
        //clear cookies
        // await clearCookie()
        return signOut(auth)
    }

    //updateProfile 
    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })
    }

    //onAuthStateChange 
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            console.log("current User", currentUser);
            setLoading(false)
        })
        return () => {
            return unSubscribe()
        }
    }, [])
    const info = {
        user,
        loading,
        createUser,
        signIn,
        signInWithGoogle,
        resetPassword,
        logOut,
        updateUserProfile
    }

    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;