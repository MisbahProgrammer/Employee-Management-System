import React, { useState } from 'react'
import CreateTask from './AdminDashboard/CreateTask'
import Header from '../Common/Header'
import AllTasks from './AdminDashboard/AllTasks'


const AdminDashboard = () => {
  const [Tasks, setTasks] = useState([])

  return (
    <>
    
    <Header/>
    <CreateTask setTasks={setTasks}/>
    <AllTasks tasks={Tasks}/>
   
    </>
  )
}

export default AdminDashboard