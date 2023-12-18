import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState} from "react";
import PropTypes from 'prop-types';
import auth from "../config/firebase";




import { FacebookAuthProvider } from "firebase/auth";

const FacebookProvider = new FacebookAuthProvider();


export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {


    const [user, setUser] = useState({})
    const[loader, setLoader] = useState(true)

    //signInWithGoogle
    const googleProvider = new GoogleAuthProvider();
    const signInWithGoogle  = () => {
        setLoader(true)
        return signInWithPopup(auth, googleProvider)
    }

    // signInWithGoogle
    const signInWithFacebook = () => {
        setLoader(true)
        signInWithPopup(auth, FacebookProvider)
    }


    // create user 
    const createUser = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }



    // log in 
    const login = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // log out 
    const logOut = ()=> {
        setLoader(true)
        return signOut(auth)
        
    }

// update 
const handleUpdateProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
        displayName: name, photoURL: photo
    })
}

    // save user 
    useEffect(()=> {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoader(false)
        });

        return ()=> {
            unSubscribe()
        }


    } ,[])
// console.log(user);

    const authInfo = {
        signInWithGoogle, signInWithFacebook, createUser, login,logOut, user, loader,handleUpdateProfile
    }


    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};




AuthProvider.propTypes = {
        children: PropTypes.node
}

export default AuthProvider;