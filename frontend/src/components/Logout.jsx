import React from 'react'
import { useAuth } from '../context/AuthProvider';
import toast from 'react-hot-toast';

function Logout() {

     const [authUser, setAuthUser] = useAuth();
     const handleLogout = () => {
          try {
               setAuthUser({
                    ...authUser,
                    user: null
               })
               localStorage.removeItem("Users")
               toast.success("Logout Successfully")
               window.location.reload();
          } catch (error) {
               toast.error("Error:" + error.message)
          }
     }
  return (
    <div>
      <button className='px-3 py-2 bg-red-500 text-white cursor-pointer rounded-lg hover:bg-red-700 duration-200' onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Logout
