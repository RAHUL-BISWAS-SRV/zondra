"use client";
import "./tasks.scss";
import TaskMenus from "@/Container/TaskMenus/TaskMenus";
import TaskHeader from "@/Container/TaskHeader/TaskHeader";
import AddTaskBox from "@/Container/AddTaskBox/AddTaskBox";
import AllTaskContainer from "@/Container/TaskContainer/AllTaskContainer";
import TodaytaskContainer from "@/Container/TaskContainer/TodaytaskContainer";
import { useContext, useEffect, useState } from "react";
import { GlobalStore } from "@/ContextAPI/Store";


const Page = () => {
  const {taskData} = useContext(GlobalStore);
  const [taskbar, setTaskbar] = useState(true);
  
  const taskbarHandel = (data) =>{
    setTaskbar(data)
  }

  return (
    <div className="mainContainerBody">
      <div className="homeComponent">
        <TaskMenus/>
        <div className="taskboardContainer">
          <TaskHeader setTaskBar={taskbarHandel} taskbar={taskbar}/>
          {taskbar ? <AddTaskBox /> : null}

          <AllTaskContainer data={taskData}/>
        </div>
      </div>
    </div>
  );
};

export default Page;
