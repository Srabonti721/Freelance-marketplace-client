import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.init";


export const AuthContext = createContext(null);

const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(true);
    const [tasks, setTasks] = useState([]);

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    };
    const loginUser = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    // const update = (updateProfile) =>{
        // return updateProfile(auth.currentUser(updateProfile))
        const updateUser = (name, photo) => {
  return updateProfile(auth.currentUser, {
    displayName: name,
    photoURL: photo,
  });
// };
    }
    // google sign in
    const GoogleSignIn = () =>{
        setLoading(true)
        return signInWithPopup(auth, provider)
    }
    const logOut = () =>{
        return signOut(auth)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setLoading(false)
setUsers(currentUser)
        })
        return()=>{
            unSubscribe()
        }
    },[])

    const userInfo = {
        users,
         loading,
         tasks,
        setUsers,
        setLoading,
        setTasks,
        createUser,
        loginUser,
        updateUser,
        GoogleSignIn,
        logOut,
    };
    return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthProvider;
