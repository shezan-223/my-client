import React from 'react';
import { useForm } from 'react-hook-form';

import { data, useLocation, useNavigate } from 'react-router';
import { useAuth } from './AuthContext';
import Swal from 'sweetalert2';


const Register = () => {

    const { registerUser, } = useAuth()

    const { register, handleSubmit, formState: { errors } } = useForm()
    const location = useLocation()
    const navigate = useNavigate()

    const registerSubmit = (data) => {
        const { email, password } = data;
        registerUser(email, password)
            .then(result => {
                console.log("Register Successfully", result.user);
                Swal.fire("You Are Successfully Register");
                navigate("/")

            })
            .catch(error => {
                console.log("Firebase Errror", error.message);

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
                    <h1 className="text-5xl font-bold">Register Now!</h1>
                    <p className="py-6">
                        Join our community today and start exploring the best properties in the area.
                    </p>
                </div>

                <form onSubmit={handleSubmit(registerSubmit)} className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
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
                            <button type='submit' className="btn btn-neutral mt-4">Register</button>
                        </fieldset>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;