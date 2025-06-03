import React from 'react'
import { FaClipboardList, FaCheckCircle, FaTimesCircle, FaHourglassStart, FaInfoCircle } from 'react-icons/fa'

const TaskMessage = () => {
  return (
    <>
    <div className="m-5 p-6 rounded-lg bg-white border border-gray-200 shadow-sm">
  <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
    <FaInfoCircle className="text-blue-600" /> Task Details
  </h2>
  <p className="text-gray-600 mt-2">Here you'll see details about assigned employees...</p>
</div>

    </>
  )
}

export default TaskMessage