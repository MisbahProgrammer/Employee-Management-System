import React, { useContext, useEffect, useState } from 'react'
import Login from './Components/Auth/login'
import EmployeeDashboard from './Components/Dashboard/EmployeeDashboard'
import AdminDashboard from './Components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './Utils/LocalStorage'
import { AuthContext } from './Context/AuthProvider'

function App() {
  
  const [User, setUser] = useState(null)
  const Authdata = useContext(AuthContext)
  useEffect(() => {
    if (Authdata) {
      const loggedInUser = localStorage.getItem('loggedInUser')
      if (loggedInUser) {
         setUser(loggedInUser.role)
      }
    }
  
   
  }, [])
  
  
  const LoginHandler = (email, password) =>{
    if (email == 'admin@example.com' && password == '123') {
     setUser('admin')
      localStorage.setItem('loggedInUser',JSON.stringify({role: 'admin'}))
    }else if(Authdata && Authdata.employees.find((e)=>email ===e.email && e.password === password )){
      setUser('employees')
      localStorage.setItem('loggedInUser' , JSON.stringify({role: 'employee'}))
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