import React from 'react';
import { useAuth } from './AuthContext';
import { useLocation, useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const Login = () => {


 const { registerUser,signInUser } = useAuth()

    const { register, handleSubmit, formState: { errors } } = useForm()
    const location = useLocation()
    const navigate = useNavigate()

const handleSignIn =(data)=>{
const {email, password} =data
    signInUser(email, password)
    .then(result =>{
        console.log("Logged in  SuccessfUlly",result.user);
    Swal.fire("You Are Successfully Logged In")
    navigate('/')    
    })
    .catch(error =>{
        console.log("Firebase Error from login",error.message);
        
    })
}


    return (
          <div
            className="hero min-h-screen"
            style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1494526585095-c41746248156?fm=jpg&q=60&w=3000')",
                backgroundSize: 'cover',
                backgroundPosition: ''
            }}>

            {/* Overlay to make the form stand out against the background */}
            <div className="hero-overlay bg-opacity-40"></div>

            <div className="hero-content flex-col lg:flex-row w-full justify-start px-10">
                <div className="text-center lg:text-left text-white max-w-md">
                    <h1 className="text-5xl font-bold">Login Now!</h1>
                    <p className="py-6">
                        Join our community today and start exploring the best properties in the area.
                    </p>
                </div>

                <form onClick={handleSubmit(handleSignIn)} className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <fieldset className="fieldset">
                            <label className="label">Email</label>
                            <input type="email" {
                                ...register("email", { required: true })
                            } className="input input-bordered" placeholder="Email" />
                            <label className="label">Password</label>
                            <input type="password" {
                                ...register("password", { required: true })
                            } className="input input-bordered" placeholder="Password" />
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button type='submit' className="btn btn-neutral mt-4">Login </button>
                        </fieldset>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;