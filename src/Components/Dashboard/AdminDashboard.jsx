import React, { useState } from 'react'
import CreateTask from './AdminDashboard/CreateTask'
import Header from '../Common/Header'
import AllTasks from './AdminDashboard/AllTasks'


const AdminDashboard = () => {
  

  return (
    <>
    <div className='overflow-auto '>
    <Header/>
    <CreateTask/>
    <AllTasks/>
    </div>
    </>
  )
}

export default AdminDashboard