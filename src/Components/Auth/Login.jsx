import React, { useState } from 'react'
import './../../App.css'
function Login({LoginHandler}) {
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
   const Submitter = (e) =>{
      e.preventDefault()
      LoginHandler(email,password)
    setEmail("")
    setPassword("")
    
    
   }
  return (
    <div className='flex items-center justify-center w-screen h-screen'>
      <div className='flex items-center justify-center flex-col w-[30%] h-[70%] border'>
        <h2>Login</h2>
        <form action="" className='flex flex-col gap-3' onSubmit={(e) =>{
          Submitter(e)
        }}>
          <input 
          value={email}
          onChange={(e)=>{
            setEmail(e.target.value)
          }}
          className='py-3 px-5 rounded-full border border-gray-300 outline-none' 
          type="text" placeholder='Email' required 
          />
          <input
          value={password} 
          onChange={(e)=>{
            setPassword(e.target.value)
          }}
          className='py-3 px-5 rounded-full border border-gray-300 outline-none' 
          type="text" placeholder='Password' required 
          />
          <button className='py-3 px-5 rounded-full bg-teal-600 text-white cursor-pointer'>Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login