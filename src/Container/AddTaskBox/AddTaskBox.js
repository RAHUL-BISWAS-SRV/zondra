'use client'
import {useContext, useState, useEffect} from "react";
import { getCurrentDate, addNewTask, filterTaskContainerItem, editTaskItems, getFilterTask } from "@/Functions/Functions";
import { GlobalStore } from "@/ContextAPI/Store";

const AddTaskBox = () => {
  const {isAuth, taskItem, setTaskItem, setAllTasks, setTaskData, activeTaskBtn} = useContext(GlobalStore);
  const [taskBtn, setTaskBtn] = useState("Add Task")
  const [taskValue, setTaskValue] = useState("");
  const [category, setCategory] = useState("welcome");
  const [dueDate, setDueDate] = useState(getCurrentDate());



  const handleAddTask = async () => {
    if(taskValue  === ""){
      alert("Please Enter Task");
      return;
    } 
    setTaskBtn("Adding Task...")
    const taskData = {
      title: taskValue,
      category: category,
      dueDate: dueDate,
    }
    const result = await addNewTask(isAuth, taskData);
    if(result.success){
      alert(result.message);
      emptyForm()
    }else{
      alert(result.message);
      setTaskBtn("Try Again")
      console.log("Task:", result.message);
    }
  };


  useEffect(() => {
    if (taskItem?.status){
      setTaskBtn("Update Task");
      setTaskValue(taskItem.title);
      setCategory(taskItem.category || "Welcome");
      setDueDate(taskItem.dueDate || getCurrentDate());
    }
  }, [taskItem]);


  const editTaskHandler = async () => {
    const updateTaskdata = {
      title: taskValue,
      category: category,
      dueDate: dueDate,
    };
    const result = await editTaskItems(isAuth, taskItem.id, updateTaskdata);
    if (result.success) {
      emptyForm();
      setTaskItem(false);
    } else {
      console.log("addTaskError:", result);
    }
  };

  function emptyForm() {
    setTaskBtn("Add Task");
    setTaskValue("");
    setCategory("welcome");
    setDueDate(getCurrentDate());
    updateTaskList();
  }
  
  async function updateTaskList() {
    const result = await getFilterTask(isAuth);
    if (result) {
      setAllTasks(result);
      const filterTask = await filterTaskContainerItem(activeTaskBtn, result);
      setTaskData(filterTask);
    }
  }

  return (
    <div className="addTaskBox">
      <input
        type="text"
        value={taskValue}
        onChange={(e) => setTaskValue(e.target.value)}
        placeholder="Enter Your Task"
        className="inputBox"
      />
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="selectCat"
      >
        <option value="welcome">Select Tag</option>
        <option value="welcome">Welcome</option>
        <option value="Work">Work</option>
        <option value="personal">Personal</option>
        <option value="shopping">Shopping</option>
        <option value="learning">Learning</option>
        <option value="fitness">Fitness</option>
        <option value="birthday">Birthday</option>
        <option value="wishlist">Wish List</option>
      </select>
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        className="dateTime"
      />
     {taskItem ? (
        <button onClick={editTaskHandler} className="taskBtn">
          {taskBtn}
        </button>
      ) : (
        <button onClick={handleAddTask} className="taskBtn">
          {taskBtn}
        </button>
      )}
    </div>
  );
};

export default AddTaskBox;
