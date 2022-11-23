import React, { createContext, useEffect, useState } from 'react';
import app from './../Firebase/firebase.init';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword} from 'firebase/auth'


export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

const  createUser = (email, password) =>{
    return createUserWithEmailAndPassword(auth, email, password);
}

const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
}

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
        });

        return ()=> unsubscribe();
    }, [])



    const authInfo = {
        createUser,
        signIn,
        user
    }

   
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;