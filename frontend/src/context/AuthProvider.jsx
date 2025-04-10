import React, { createContext, useContext, useState } from 'react'

export const AuthContext = createContext();
export default function AuthProvider({children}) {
  const initialAuthUser = localStorage.getItem("Users");
  const firstUser = {
    "_id": 1,
    "fullname": "John Doe",
    "email": "johndoe@example.com",
    "password": 12345
    }
  console.log(initialAuthUser)
      const [authUser, setAuthUser] = useState(
        initialAuthUser? JSON.parse(initialAuthUser) : (firstUser)
        )
      

  return (
    <AuthContext.Provider value={[authUser, setAuthUser]}>
     {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext);
