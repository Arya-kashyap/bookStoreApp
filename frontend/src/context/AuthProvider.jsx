import React, { createContext, useContext, useState } from 'react'

export const AuthContext = createContext();
export default function AuthProvider({children}) {
  const initialAuthUser = localStorage.getItem("Users");
  console.log(initialAuthUser)
      const [authUser, setAuthUser] = useState(
        JSON.parse(initialAuthUser?initialAuthUser:null)
        )
      

  return (
    <AuthContext.Provider value={[authUser, setAuthUser]}>
     {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext);
