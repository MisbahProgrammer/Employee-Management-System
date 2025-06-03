import React from 'react'
import { FaClipboardList, FaCheckCircle, FaTimesCircle, FaHourglassStart } from 'react-icons/fa'

const Tasks = () => {
  return (
    <>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-6">
        <div className="bg-white shadow-md rounded-lg p-4 border-l-4 border-blue-500 hover:scale-105 transform transition-transform duration-200">
          <h2 className="text-gray-600 text-sm"><FaClipboardList/>New Tasks</h2>
          <p className="text-2xl font-bold text-gray-800">12</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4 border-l-4 border-yellow-500 hover:scale-105 transform transition-transform duration-200">
          <h2 className="text-gray-600 text-sm"><FaHourglassStart/>Accepted</h2>
          <p className="text-2xl font-bold text-gray-800">7</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4 border-l-4 border-green-500 hover:scale-105 transform transition-transform duration-200">
          <h2 className="text-gray-600 text-sm"><FaCheckCircle/>Completed</h2>
          <p className="text-2xl font-bold text-gray-800">15</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4 border-l-4 border-red-500 hover:scale-105 transform transition-transform duration-200">
          <h2 className="text-gray-600 text-sm"><FaTimesCircle/>Failed</h2>
          <p className="text-2xl font-bold text-gray-800">2</p>
        </div>
      </div>
    </>
  )
}

export default Tasks