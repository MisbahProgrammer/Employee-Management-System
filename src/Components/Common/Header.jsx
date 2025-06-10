import React from 'react'

const Header = () => {
  return (
    <>
    <div className="bg-teal-600 text-white px-6 py-4 flex justify-between items-center shadow-md">
        <h1 className="text-xl font-semibold">Hello, Misbah 👋</h1>
        <button className="bg-white text-teal-600 px-4 py-2 rounded cursor-pointer hover:bg-gray-100 font-medium">
          Logout
        </button>
      </div>
    </>
  )
}

export default Header