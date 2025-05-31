import React from 'react'
import './../../App.css'
function Login() {
  return (
    <div className='flex items-center justify-center w-screen h-screen'>
      <div className='flex items-center justify-center flex-col w-[30%] h-[70%] border'>
        <h2>Login</h2>
        <form action="" className='flex flex-col'>
          <input className='py-2 px-4 rounded-2xl border' type="text" placeholder='Email' />
          <input className='py-2 px-4 rounded-2xl border' type="text" placeholder='Password' />
        </form>
      </div>
    </div>
  )
}

export default Login