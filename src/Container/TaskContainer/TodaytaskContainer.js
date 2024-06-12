import TaskItemBox from "../TaskItemBox/TaskItemBox";

const TodaytaskContainer = () => {
  const tasks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <>
      <div className="TaskListContainer">
        <p className="titleHead fw-bold">Today Active Task</p>
        <div className="ActiveTaskBox">
          {tasks.map((task) => {
            return <TaskItemBox key={task} />;
          })}
        </div>
        {/* call=emptyTaskBox */}
      </div>
      <div className="TaskListContainer">
        <p className="titleHead fw-bold">Today Completed Task</p>
        <div className="ActiveTaskBox">
          {tasks.map((task) => {
            return <TaskItemBox key={task} />;
          })}
        </div>
        {/* call=emptyTaskBox */}
      </div>
    </>
  );
};

export default TodaytaskContainer;
