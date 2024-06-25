import "./TaskItemBox.scss";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import RestoreIcon from "@mui/icons-material/Restore";
import { useContext } from "react";
import { GlobalStore } from "@/ContextAPI/Store";
import {
  changeTaskItemStatus,
  getFilterTask,
  filterTaskContainerItem,
  deleteTrashTaskItems,
} from "@/Functions/Functions";

const TaskItemBox = ({ task }) => {
  const {
    isAuth,
    setAllTasks,
    setTaskData,
    activeTaskBtn,
    setTaskItem,
    setIsLoader,
  } = useContext(GlobalStore);

  const changeTaskStatus = async (status) => {
    try {
      if (!task || !task.id) {
        throw new Error("Task is undefined or does not have an ID.");
      }
      setIsLoader(true);
      const TaskId = task.id;
      const result = await changeTaskItemStatus(isAuth, TaskId, status);
      if (result.success) {
        updateTaskList();
      } else {
        console.error("Failed to update task:", result.message);
      }
    } catch (error) {
      console.error("Error in changeTaskStatus:", error.message);
    } finally {
      setIsLoader(false);
    }
  };

  const changeTaskStatusCompleted = () => changeTaskStatus("completed");
  const changeTaskStatusActive = () => changeTaskStatus("active");
  const deleteTaskHandler = () => changeTaskStatus("deleted");

  const deleteTaskTrashHandler = async () => {
    setIsLoader(true);
    const TaskId = task?.id;
    const result = await deleteTrashTaskItems(isAuth, TaskId);
    if (result.success) {
      updateTaskList();
    }
  };

  async function updateTaskList() {
    const result = await getFilterTask(isAuth);
    if (result) {
      setAllTasks(result);
      const filterTask = await filterTaskContainerItem(activeTaskBtn, result);
      setTaskData(filterTask);
    }
    setIsLoader(false);
  }

  const editTaskHandler = async () => {
    setTaskItem(task);
  };

  const copyItemHandler = (title) => {
    navigator.clipboard.writeText(title);
  };

  return (
    <div className="taskItemContainer">
      <div className="task-data">
        {task?.status === "active" ? (
          <input
            type="checkbox"
            className="form-check-input"
            onClick={changeTaskStatusCompleted}
          />
        ) : task?.status === "completed" ? (
          <input
            type="checkbox"
            className="form-check-input"
            onClick={changeTaskStatusActive}
            checked
          />
        ) : (
          <input type="checkbox" className="form-check-input" />
        )}
        <p className="para">{task?.title}</p>
      </div>
      <div className="btn-cntnr">
        {task?.status === "deleted" ? (
          <RestoreIcon
            className="bi bi-trash-fill"
            onClick={changeTaskStatusActive}
          />
        ) : (
          <EditIcon className="bi bi-edit-fill" onClick={editTaskHandler} />
        )}
        <ContentCopyIcon
          className="bi bi-copy-fill"
          onClick={() => copyItemHandler(task?.title)}
        />
        {task?.status === "deleted" ? (
          <DeleteIcon
            className="bi bi-trash-fill"
            onClick={deleteTaskTrashHandler}
          />
        ) : (
          <DeleteIcon
            className="bi bi-trash-fill"
            onClick={deleteTaskHandler}
          />
        )}
      </div>
    </div>
  );
};

export default TaskItemBox;
