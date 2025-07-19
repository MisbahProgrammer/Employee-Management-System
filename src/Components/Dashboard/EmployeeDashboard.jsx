import React from "react";
import "./../../App.css";
import Header from "../Common/Header";
import Tasks from "./EmployeeDashboard/Tasks";
import TaskMessage from "../TaskList/TaskMessage";
function EmployeeDashboard({data}) {
 const {id, name} = data
  console.log(id, name);
  
  
  return (
    <>
    <div className="">
      
      <Header name={name}/>
      <Tasks/>
      <TaskMessage/>
      </div>
      
    </>
  );
}

export default EmployeeDashboard;
