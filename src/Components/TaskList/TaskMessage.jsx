import React from 'react'

const TaskMessage = () => {
  return (
    <>
    <div className="bg-white rounded-lg shadow p-6 m-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Task Details
        </h2>
        <p className="text-gray-600 text-sm">
          Here you’ll see details about the tasks: assigned employee, due date,
          task description, and progress.
        </p>
      </div>
    </>
  )
}

export default TaskMessage