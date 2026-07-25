import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.init";


export const AuthContext = createContext(null);

const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [users, setUsers] = useState(null)

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };
    const loginUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    // google sign in
    const GoogleSignIn = () =>{
        return signInWithPopup(auth, provider)
    }
    const logOut = () =>{
        return signOut(auth)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
setUsers(currentUser)
        })
        return()=>{
            unSubscribe()
        }
    },[])

    const userInfo = {
        users, 
        setUsers,
        createUser,
        loginUser,
        GoogleSignIn,
        logOut,
    };
    return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthProvider;
