/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile, } from 'firebase/auth'
import app from "../firebase/firebase.config";
import useAxiosPublic from "../hooks/useAxiosPublic";

// import { clearCookie } from "../api/authshare";

export const AuthContext = createContext(null)

const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
        const axiosPublic =useAxiosPublic()
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

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            console.log("current User", currentUser);
            if(currentUser){
                //get token and store client
                const userInfo ={ email: currentUser.email}
                axiosPublic.post("/jwt", userInfo)
                .then(res=>{
                    console.log(res.data.token);
                    if(res.data.token){
                        localStorage.setItem("access-token", res.data.token)
                        setLoading(false)

                    }
                })
                
            }
            else{
                //TODO: remove token(if token stored in the client site local storage, caching, in memory)
                 localStorage.removeItem("access-token")
                 setLoading(false)
            }
            
        })
        return() =>{
            return unSubscribe()
        }
    }, [axiosPublic])
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