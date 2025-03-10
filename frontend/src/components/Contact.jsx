import React from 'react'
import { useForm } from "react-hook-form"
import { Link } from 'react-router-dom'

function Contact() {
     const {
                    register,
                    handleSubmit,
                    formState: { errors },
                  } = useForm()
                
                  const onSubmit = (data) => console.log(data)

  return (
     <>
      <div className="flex items-center justify-center h-screen ">
          <div className="modal-box  border shadow-lg dark:bg-white dark:text-black">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog" >
               {/* if there is a button in form, it will close the modal */}
               <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
          
          <h2 className="font-bold text-lg">Contact us</h2>
          <div>
               <h4 className='mt-5'>Your Name</h4>
               <input type="text" placeholder='Enter your Full Name' className='mt-3 bg-base-100 px-2 py-1 border outline-none rounded-md w-80 dark:bg-white dark:text-black' {...register("text", { required: true })}/>
               <br />
               {errors.text && <span className='text-sm text-red-500'>This field is required</span>}
          </div>
          <div>
               <h4 className='mt-5'>Email</h4>
               <input type="email" placeholder='Enter your email' className='mt-3 bg-base-100 px-2 py-1 border outline-none rounded-md w-80 dark:bg-white dark:text-black' {...register("email", { required: true })}/>
               <br />
               {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
          </div>
          <div>
               <h4 className='mt-5'>Message</h4>
               <input type="text" placeholder='Enter your password' className='mt-3 bg-base-100 px-2 py-1 border outline-none rounded-md w-80 dark:bg-white dark:text-black' {...register("text", { required: true })}/>
               <br />
               {errors.text && <span className='text-sm text-red-500'>This field is required</span>}
          </div>
          <div className='mt-10 flex justify-between'>
               <button className='text-white bg-pink-500 px-3 py-1 rounded-md cursor-pointer hover:bg-pink-700'>Submit</button>
               
          </div>
          </form>
          </div>
     </div>
    </>
  )
}

export default Contact
