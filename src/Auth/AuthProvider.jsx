import React from 'react';
import AuthContext from './AuthContext';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';

const AuthProvider = ({children}) => {
    const auth =getAuth()

const registerUser = async (email, password) => {
        try {
            const result = await createUserWithEmailAndPassword(auth, email, password);
            return result.user;
        } catch (error) {
            console.error(error.code, error.message);
            throw error;
        }
    };

const authinfo ={
    registerUser

}



    return (
        
        
        <AuthContext.Provider value={authinfo} >
            {children}

        </AuthContext.Provider>
      
    );
};

export default AuthProvider;{children}