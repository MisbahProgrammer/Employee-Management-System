import React, { useState } from 'react'
import CreateTask from './AdminDashboard/CreateTask'
import Header from '../Common/Header'
import AllTasks from './AdminDashboard/AllTasks'


const AdminDashboard = ({data}) => {
  const {id, name} = data
  console.log(name);
  
  const [Tasks, setTasks] = useState([])

  return (
    <>
    
    <Header name={name}/>
    <CreateTask setTasks={setTasks}/>
    <AllTasks tasks={Tasks}/>
   
    </>
  )
}

export default AdminDashboard