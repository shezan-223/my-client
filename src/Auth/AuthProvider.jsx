import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from './Auth.config';

const AuthProvider = ({children}) => {
    const googleProvider =new GoogleAuthProvider()
    const [user, setUser]=useState(null)
    const  [loading, setLoading]=useState(true)
   

const registerUser = async (email, password) => {
        try {
            
            const result = await createUserWithEmailAndPassword(auth, email, password);
            return result.user;
        } catch (error) {
            console.error(error.code, error.message);
            throw error;
        }
    };



const signInUser =async(email,password)=>{

setLoading(true);

const result  =await signInWithEmailAndPassword(auth,email,password)
const token = await result.user.getIdToken();
localStorage.setItem("access-token",token);
setLoading(false)
return result ;
}


const signInWithGoogole =async ()=>{
    setLoading(true)
const result =await signInWithPopup(auth,googleProvider)
const token =await result.user.getIdToken();
localStorage.setItem("access-token",token)
setLoading(false)
return result

}







const logout = ()=>{
    setLoading (true)
    return signOut(auth)
}









useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => unsubscribe();
    }, []);

    const logOut = () => {
        return signOut(auth);
    };






const authinfo ={
    registerUser,
    logout,
    user,
    signInWithGoogole,
    signInUser

}



    return (
        
        
        <AuthContext.Provider value={authinfo} >
            {children}

        </AuthContext.Provider>
      
    );
};

export default AuthProvider