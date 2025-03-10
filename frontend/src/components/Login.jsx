import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"
import axios from 'axios'
import toast from 'react-hot-toast'

function Login() {
     const {
          register,
          handleSubmit,
          formState: { errors },
        } = useForm()
      
        const onSubmit =async (data) => {
          const userInfo = {
               email: data.email,
               password: data.password,
          }
          await axios.post("http://localhost:4001/user/login", userInfo)
          .then((res) => {
               console.log(res.data);
               if(res.data){
                    toast.success("login successfully")
                    document.getElementById("my_modal_3").close()
                    window.location.reload()
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
    <div className=''>
      <dialog id="my_modal_3" className="modal">
          <div className="modal-box dark:bg-white dark:text-black">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
               {/* if there is a button in form, it will close the modal */}
               <Link to= "/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => document.getElementById("my_modal_3").close()}>✕</Link>
          
          <h2 className="font-bold text-lg">Login</h2>
          <div>
               <h4 className='mt-5'>Email</h4>
               <input type="email" placeholder='Enter your email' className='mt-3 bg-base-100 px-2 py-1 border outline-none rounded-md w-80 dark:bg-white dark:text-black' {...register("email", { required: true })} 
               />
               <br />
               {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
          </div>
          <div>
               <h4 className='mt-5'>Password</h4>
               <input 
               type="password" 
               placeholder='Enter your password' 
               className='mt-3 bg-base-100 px-2 py-1 border outline-none rounded-md w-80 dark:bg-white dark:text-black' 
               {...register("password", { required: true })}/>
               <br />
               {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
          </div>
          <div className='mt-10 flex justify-between'>
               <button className='text-white bg-pink-500 px-3 py-1 rounded-md cursor-pointer hover:bg-pink-700'> Login </button>
               <p>Not Registered?<Link to="/signup" className='text-blue-500 underline cursor-pointer'> Signup</Link></p>
          </div>
          </form>
          </div>
     </dialog>
    </div>
  )
}

export default Login
