import React, { useEffect } from 'react';
import { useAuth } from '../Auth/AuthContext';
import axios from 'axios';
import { useNavigate } from 'react-router';

const axiosSecure =axios.create({
    baseURL :"http://localhost:5000"
})



const UseAxiosSecure = () => {

const {logout}=useAuth()
const navigate =useNavigate()

useEffect(()=>{
    const requestinterceptor =axiosSecure.request.use(
        async(config)=>{
            const token  =localStorage.getItem("access-token");
            if(token){
                config.headers.authorization =`Bearer ${token} `;

            }
            return config

        },
         (error) => Promise.reject(error)
    )
     const responseInterceptor = axiosSecure.interceptors.response.use(
      (res) => res,
      async (error) => {
        const status = error.response?.status;

        if (status === 401 || status === 403) {
          await logout();
          navigate("/login");
        }

        return Promise.reject(error);
      }

      
    );


    return()=>{
        axiosSecure.interceptors.request.eject(requestinterceptor)
        axiosSecure.interceptors.request.eject(responseInterceptor)
    } ;
},
[logout,navigate]

)





    return axiosSecure
};

export default UseAxiosSecure;