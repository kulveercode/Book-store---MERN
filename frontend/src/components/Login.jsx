import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form"
const Login = () => {
    const [message, setMessage] = useState("");
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => console.log(data);

      const handleGoogleSignIn = () => {
        
      }

  return (
    <div className='h-[calc(100vh-120px)] border flex justify-center items-center'>
        <div className='w-full max-w-sm mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
            <h2 className='text-xl font-semibold mb-4'>Please Login</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="email" className='block text-gray-700 text-sm font-bold mb-2'>Email</label>
                    <input
                    {...register("email", { required: true })}
                    type="email" name="email" id="email" placeholder='Email Address' className='shadow focus:outline-none focus:shadow appearance-none border rounded w-full px-3 py-2' />
                </div>
                <div className='mb-4'>
                    <label htmlFor="password" className='block text-gray-700 text-sm font-bold mb-2'>Password</label>
                    <input
                    {...register("password", { required: true })}
                    type="password" name="password" id="password" placeholder='Password' className='shadow focus:outline-none focus:shadow appearance-none border rounded w-full px-3 py-2' />
                </div>
                {
                    message && <p className='text-red-500 text-xs italic mb-3'>{message}</p>
                }
                <div>
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold px-8 py-2 rounded focus:outline-none'>Login</button>
                </div>
            </form>
            <p className='text-sm font-medium mt-4 align-baseline'>Haven't an account? Please <Link to='/register' className='text-blue-500 hover:text-blue-700'>Register</Link></p>
            {/* google signin  */}
            <div className='mt-4'>
                <button 
                onClick={handleGoogleSignIn}
                className='w-full flex items-center justify-center px-4 py-2 rounded focus:outline-none gap-1 flex-wrap bg-secondary hover:bg-blue-700 text-white font-bold'>
                    <FaGoogle className='mr-2' />
                    Signin with Google
                </button>
            </div>
            <p className='text-xs text-gray-500 text-center mt-5'>©2025 Book Store. All rights resvered.</p>
        </div>
    </div>
  )
}

export default Login;