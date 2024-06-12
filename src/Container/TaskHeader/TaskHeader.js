"use client";
import { useState, useEffect } from "react";
import AddTaskIcon from "@mui/icons-material/AddTask";

const TaskHeader = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(intervalId);
  }, []);

  const formatTime = (date) => {
    let hours = date.getHours();
    const ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12 || 12;
    const minutes = date.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}${ampm}`;
  };

  return (
    <div className="headerBox">
      <div className="leftHeaderBox">
        <div className="fw-bold">Hello Dear, Good Morning</div>
      </div>
      <div className="rightHeaderBox">
        <div className="add-btn">
          <AddTaskIcon className="addBtnIcon" />
        </div>
        <div className="fw-bold" id="Datediv">
          Date: {time.toLocaleDateString()}
        </div>
        <div className="fw-bold" id="Timediv">
          Time: {formatTime(time)}
        </div>
      </div>
    </div>
  );
};

export default TaskHeader;
