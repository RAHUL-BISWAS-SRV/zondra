"use client";
import { useState, useEffect, useContext } from "react";
import AddTaskIcon from "@mui/icons-material/AddTask";
import { GlobalStore } from "@/ContextAPI/Store";
import { getMotivateMessage } from "@/Functions/Functions";

const TaskHeader = (props) => {
  const [time, setTime] = useState(new Date());
  const {userDetails} = useContext(GlobalStore);
  const [motivateMessage, setMotivateMessage] = useState(false);
  const [formattedDate, setFormattedDate] = useState('');

  useEffect(() => {
    const intervalId = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(intervalId);
  }, []);
  useEffect(() =>{
    setMotivateMessage(getMotivateMessage());
    setFormattedDate(time.toLocaleDateString())
  },[]);

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
        <div className="fw-bold">Hello {userDetails?.name?.split(' ')[0]}, {motivateMessage}</div>
      </div>
      <div className="rightHeaderBox">
        <div className="add-btn">
          <AddTaskIcon className="addBtnIcon" onClick={()=>props.setTaskBar(!props.taskbar)}/>
        </div>
        <div className="fw-bold" id="Datediv">
          Date: {formattedDate}
        </div>
        <div className="fw-bold" id="Timediv">
          Time: {formatTime(time)}
        </div>
      </div>
    </div>
  );
};

export default TaskHeader;
