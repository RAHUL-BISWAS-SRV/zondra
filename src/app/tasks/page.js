"use client";
import "./tasks.scss";
import TaskMenus from "@/Container/TaskMenus/TaskMenus";
import TaskHeader from "@/Container/TaskHeader/TaskHeader";
import AddTaskBox from "@/Container/AddTaskBox/AddTaskBox";
import AllTaskContainer from "@/Container/TaskContainer/AllTaskContainer";
import TodaytaskContainer from "@/Container/TaskContainer/TodaytaskContainer";

const Page = () => {
  return (
    <div className="mainContainerBody">
      <div className="homeComponent">
        <TaskMenus />
        <div className="taskboardContainer">
          <TaskHeader />
          <AddTaskBox />
          <TodaytaskContainer />
        </div>
      </div>
    </div>
  );
};

export default Page;
