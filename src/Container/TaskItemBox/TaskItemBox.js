import "./TaskItemBox.scss";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import RestoreIcon from "@mui/icons-material/Restore";
import { useContext } from "react";
import { GlobalStore } from "@/ContextAPI/Store";
import { changeTaskItemStatus, getFilterTask, filterTaskContainerItem, deleteTrashTaskItems } from "@/Functions/Functions";


const TaskItemBox = (props) => {
  const {isAuth, setAllTasks, setTaskData, activeTaskBtn, setTaskItem} = useContext(GlobalStore);

  const changeTaskStatusCompleted = async () => {
    const TaskId = props?.task?.id;
    const result = await changeTaskItemStatus(isAuth, TaskId, "completed");
    if (result.success) {
      updateTaskList();
    }
  };
  const changeTaskStatusActive = async () => {
    const TaskId = props?.task?.id;
    const result = await changeTaskItemStatus(isAuth, TaskId, "active");
    if (result.success) {
      updateTaskList();
    }
  };

  const deleteTaskHandler = async () => {
    const TaskId = props?.task?.id;
    const result = await changeTaskItemStatus(isAuth, TaskId, "deleted");
    if (result.success) {
      updateTaskList();
    }
  };

  const deleteTaskTrashHandler = async () => {
    const TaskId = props?.task?.id;
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
  }

  const editTaskHandler = async () => {
    setTaskItem(props?.task);
  };
  
  const copyItemHandler = (title) => {
    navigator.clipboard.writeText(title);
  };

  return (
    <div className="taskItemContainer">
      <div className="task-data">
        {props?.task?.status === "active" ? (
          <input
            type="checkbox"
            className="form-check-input"
            onClick={changeTaskStatusCompleted}
          />
        ) : props?.task?.status === "completed" ? (
          <input
            type="checkbox"
            className="form-check-input"
            onClick={changeTaskStatusActive}
            checked
          />
        ) : (
          <input
            type="checkbox"
            className="form-check-input"
          />
        )}
        <p className="para">{props?.task?.title}</p>
      </div>
      <div className="btn-cntnr">
        {props?.task?.status === "deleted" ? (
          <RestoreIcon
            className="bi bi-trash-fill"
            onClick={changeTaskStatusActive}
          />
        ) : (
          <EditIcon className="bi bi-edit-fill" onClick={editTaskHandler} />
        )}
        <ContentCopyIcon
          className="bi bi-copy-fill"
          onClick={() => copyItemHandler(props?.task?.title)}
        />
        {props?.task?.status === "deleted" ? (
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
