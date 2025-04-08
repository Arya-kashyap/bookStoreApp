import React, { useEffect, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import Login from './Login'
import { useForm } from "react-hook-form"
import axios from 'axios'
import toast from 'react-hot-toast'

function Signup() {
     const {
               register,
               handleSubmit,
               formState: { errors },
             } = useForm()
           
             const onSubmit =async (data) => {
               const userInfo = {
                    fullname: data.fullname,
                    email: data.email,
                    password: data.password,
               }
<<<<<<< HEAD
               await axios.post("/api/user/signup", userInfo)
=======
               await axios.post("https://bookstoreapp-backend-bag4.onrender.com/user/signup", userInfo)
>>>>>>> 4703428736d88240fa6d31a39682a59125861c17
               .then((res) => {
                    console.log(res.data);
                    if(res.data){
                         toast.success("signup successfully");
                    }
                    localStorage.setItem("Users", JSON.stringify(res.data.user))
               }).catch((err) => {
                    if(err.response){
                         console.log(err);
                         toast.error("error:" + err.response.data.message)
                    }
               })
             }

  return (
    <>
      <div className="flex items-center justify-center h-screen ">
          <div className="modal-box dark:bg-white dark:text-black border shadow-lg">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
               {/* if there is a button in form, it will close the modal */}
               <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
          
          <h2 className="font-bold text-lg">Signup</h2>
          <div>
               <h4 className='mt-5'>Full Name</h4>
               <input type="text" placeholder='Enter your Full Name' className='mt-3 bg-base-100 px-2 py-1 border outline-none rounded-md w-80 dark:bg-white dark:text-black' {...register("fullname", { required: true })}/>
               <br />
               {errors.fullname && <span className='text-sm text-red-500'>This field is required</span>}
          </div>
          <div>
               <h4 className='mt-5'>Email</h4>
               <input type="email" placeholder='Enter your email' className='mt-3 bg-base-100 px-2 py-1 border outline-none rounded-md w-80 dark:bg-white dark:text-black' {...register("email", { required: true })}/>
               <br />
               {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
          </div>
          <div>
               <h4 className='mt-5'>Password</h4>
               <input type="password" placeholder='Enter your password' className='mt-3 bg-base-100 px-2 py-1 border outline-none rounded-md w-80 dark:bg-white dark:text-black' {...register("password", { required: true })}/>
               <br />
               {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
          </div>
          <div className='mt-10 flex justify-between'>
               <button className='text-white bg-pink-500 px-3 py-1 rounded-md cursor-pointer hover:bg-pink-700'>Signup</button>
               <p>Have Account? 
                <button className = 'text-blue-500 underline cursor-pointer'  onClick = {() => document.getElementById("my_modal_3").showModal()}> Login </button>
                <Login/>
               </p>
          </div>
          </form>
          </div>
     </div>
    </>
  )
}

export default Signup
