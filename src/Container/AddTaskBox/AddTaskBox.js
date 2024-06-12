'use client'
import {useState} from "react";

const AddTaskBox = () => {
  const [taskValue, setTaskValue] = useState("");
  const [category, setCategory] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleAddTask = () => {
    // Here you can handle the addition of the task
    console.log("Task:", taskValue);
    console.log("Category:", category);
    console.log("Due Date:", dueDate);
  };
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
        <option value="">Select Tag</option>
        <option value="Work">Work</option>
        <option value="Personal">Personal</option>
        <option value="Study">Study</option>
        <option value="Others">Others</option>
      </select>
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        className="dateTime"
      />
      <button onClick={handleAddTask} className="taskBtn">
        Add Task
      </button>
    </div>
  );
};

export default AddTaskBox;
