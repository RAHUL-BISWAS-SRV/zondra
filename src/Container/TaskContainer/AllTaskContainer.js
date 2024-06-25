import TaskItemBox from "../TaskItemBox/TaskItemBox";
import './AllTaskContainer.scss';
import { useContext } from "react";
import { GlobalStore } from "@/ContextAPI/Store";
import { getFilterTask, filterTaskContainerItem, clearTrashTask } from "@/Functions/Functions";

const AllTaskContainer = (props) => {
  const {isAuth, setTaskData, setAllTasks, activeTaskBtn, setIsLoader} = useContext(GlobalStore);


  const clearAlltrashTaskHandler = async () => {
    setIsLoader(true)
    const result = await clearTrashTask(isAuth);
    if (result.success) {
      updateTaskList()
    }
    setIsLoader(false);
  };
  async function updateTaskList() {
    const result = await getFilterTask(isAuth);
    if (result) {
      setAllTasks(result);
      const filterTask = await filterTaskContainerItem(activeTaskBtn, result);
      setTaskData(filterTask);
    }
  }

  return (
    <div className="AllTaskListContainer">
      <div className="trashHeaderBox">
        <p className="titleHead fw-bold">{props.data?.content}</p>
        {props.data.id === "trash" && (
          <p className="clearBtn fw-bold" onClick={clearAlltrashTaskHandler}>Clear Trash</p>
        )}
      </div>
      {props.data?.tasks?.length > 0 ? (
        <div className="ActiveTaskBox">
          {props.data.tasks.map((task) => {
            return <TaskItemBox task={task} key={task.id} />;
          })}
        </div>
      ) : (
        <div className="activeTaskStatus">
          <h3 className="fw-bold">Opps! You Have No Task</h3>
        </div>
      )}
    </div>
  );
};

export default AllTaskContainer;
