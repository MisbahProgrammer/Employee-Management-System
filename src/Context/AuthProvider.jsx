import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage } from '../Utils/LocalStorage'


export const AuthContext = createContext()
const AuthProvider = ({children}) => {
    const [userData, setUserData] = useState(null)
    useEffect(() => {
    const {employees,admin} = getLocalStorage()
    setUserData({employees, admin })
    
    }, [])
    
    
    
    


  return (
    <AuthContext.Provider value={userData}>
    <div>{children}</div>
    </AuthContext.Provider>
  )
}

export default AuthProvider