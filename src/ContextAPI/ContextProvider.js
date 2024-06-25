"use client";
import { useEffect, useState } from "react";
import { GlobalStore } from "./Store";
import {
  getToken,
  getUserProfileDetails,
  getFilterTask,
  filterTaskContainerItem,
} from "@/Functions/Functions";

const ContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState();
  const [isLoader, setIsLoader] = useState(true);
  const [userDetails, setUserDetails] = useState(false);
  const [activeTaskBtn, setActiveTaskBtn] = useState("today");
  const [allTasks, setAllTasks] = useState(false);
  const [taskData, setTaskData] = useState(false);
  const [taskItem, setTaskItem] = useState(false);

  useEffect(() => {
    getAuthToken();
    if (isAuth) {
      getUserProfileDetail();
      getAllTasks();
    }
    setIsLoader(false);
  }, [isAuth]);

  async function getAuthToken() {
    const result = await getToken();
    setIsAuth(result);
  }

  async function getUserProfileDetail() {
    const result = await getUserProfileDetails(isAuth);
    if (result.status) {
      setUserDetails(result.details);
    }
  }

  async function getAllTasks() {
    const result = await getFilterTask(isAuth);
    if (result) {
      setAllTasks(result);
      getFilterTaskwithContainer(activeTaskBtn, result);
    }
  }

  async function getFilterTaskwithContainer(id, tasks) {
    const filterTask = await filterTaskContainerItem(id, tasks);
    setTaskData(filterTask);
  }

  return (
    <GlobalStore.Provider
      value={{
        // send
        isAuth,
        userDetails,
        allTasks,
        activeTaskBtn,
        taskData,
        taskItem,
        isLoader,
        // recieved
        setIsAuth,
        setUserDetails,
        setAllTasks,
        setActiveTaskBtn,
        setTaskData,
        setTaskItem,
        setIsLoader,
      }}
    >
      {children}
    </GlobalStore.Provider>
  );
};
export default ContextProvider;
