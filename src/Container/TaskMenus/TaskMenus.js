import { taskFilterList, taskCategoryList, taskHistoryList } from "@/Datas/TaskData";

const TaskMenus = () => {
  const active = "today";

  return (
    <div className="sidebarMenus">
      <div className="section">
        <p className="fw-bold title">Task</p>
        <div className="list">
          {taskFilterList.map((taskItem) => (
            <>
              <div
                className={`listItem ${
                  taskItem.id === active ? "active" : null
                }`}
                key={taskItem.id}
              >
                <div className="inner">
                  {taskItem.icon}
                  <p className="fw-bold">{taskItem.title}</p>
                </div>
                <span className="badge bg-primary rounded-pill">
                  {taskItem.count}
                </span>
              </div>
              <div className="devider"></div>
            </>
          ))}
        </div>
      </div>

      <div className="section">
        <p className="fw-bold title">Tags</p>
        <div className="list">
          {taskCategoryList.map((taskItem) => (
            <>
              <div className="listItem" key={taskItem.id}>
                <div className="inner">
                  {taskItem.icon}
                  <p className="fw-bold">{taskItem.title}</p>
                </div>
                <span className="badge bg-primary rounded-pill">
                  {taskItem.count}
                </span>
              </div>
              <div className="devider"></div>
            </>
          ))}
        </div>
      </div>

      <div className="section">
        <p className="fw-bold title">History</p>
        <div className="list">
          {taskHistoryList.map((taskItem) => (
            <>
              <div className="listItem" key={taskItem.id}>
                <div className="inner">
                  {taskItem.icon}
                  <p className="fw-bold">{taskItem.title}</p>
                </div>
                <span className="badge bg-primary rounded-pill">
                  {taskItem.count}
                </span>
              </div>
              <div className="devider"></div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskMenus;
