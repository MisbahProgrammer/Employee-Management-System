import React, { useEffect, useState } from 'react'
import Login from './Components/Auth/login'
import EmployeeDashboard from './Components/Dashboard/EmployeeDashboard'
import AdminDashboard from './Components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './Utils/LocalStorage'

function App() {
  
  const [User, setUser] = useState(null)
  const LoginHandler = (email, password) =>{
    if (email == 'admin@example.com' && password == '123') {
     setUser('admin')
      
    }else if(email == 'ali@example.com' && password == '123'){
      setUser('employees')
      
    }else{
      alert('Invalid Credentials')
    }
    
  }
  
  return (
    <>
    {!User ? <Login LoginHandler={LoginHandler}/> : ''}
    {User == 'admin' ? <AdminDashboard/> : <EmployeeDashboard/>}
    </>
  )
}

export default App