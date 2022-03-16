import React, { createContext, useEffect, useState } from 'react'
import { auth, googleAuthProvider } from '../../firebase';
import firebase from 'firebase/compat/app'
import { signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import {provider} from '../../firebase'

const AuthContext = createContext();

export function AuthProvider(props) {

    const [currentUser, setCurrentUser] = useState();
    
    useEffect(async () => {
        console.log(currentUser)
        if (currentUser) {
            console.log(await currentUser.getIdToken())
        }
    }, [currentUser])
        
    // const signup = (email, password, displayName) => {
    //     return createUserWithEmailAndPassword({email, emailVerified: false, password, displayName});
    // }

    // tomorrow when i will make request to backend i have to use currentUser.getIdToken() method provided by currentUser with await 
    // to get the new access token for the request to be authenticated by backend.

    // login method using signInWithEmailAndPassword
    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    // logout method
    const logout = () => {
        return auth.signOut();
    }

    // google authentication
    const signinWithGoogle = () => {
        return signInWithPopup(auth, provider);
    }

    // look for the updated state of the user if there is any change in the state of current user.
    useEffect(() => {
      const remove = auth.onAuthStateChanged( (user) => {
          setCurrentUser(user);
      })
      return remove
    }, [])



    // creating variable that stores the context value
    const value = {
        currentUser,
        // signup, 
        signinWithGoogle,
        login,
        logout
    }
    return (
        <AuthContext.Provider value={value}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext