import "./TaskItemBox.scss";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

const TaskItemBox = () => {
  return (
    <div className="taskItemContainer">
      <div className="task-data">
        <input type="checkbox" className="form-check-input" />
        <p className="para">
          The information in this email is confidential and is intended solely
          for the addressee(s).
        </p>
      </div>
      <div className="btn-cntnr">
        <EditIcon className="bi bi-edit-fill" />
        <ContentCopyIcon className="bi bi-copy-fill" />
        <DeleteIcon className="bi bi-trash-fill" />
      </div>
    </div>
  );
};

export default TaskItemBox;
