import React from "react";
import "./../../App.css";
import Header from "../Common/Header";
import Tasks from "./EmployeeDashboard/Tasks";
import TaskMessage from "../TaskList/TaskMessage";
function EmployeeDashboard() {
  return (
    <>
    <div className="">
      <Header/>
      <Tasks/>
      <TaskMessage/>
      </div>
      
    </>
  );
}

export default EmployeeDashboard;
