import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { createContext } from "react";
import { auth } from "../firebase/firebase.init";
export const AuthContext = createContext(null);


const provider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {

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

    const userInfo = {
        createUser,
        loginUser,
        GoogleSignIn,
    };
    return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthProvider;
