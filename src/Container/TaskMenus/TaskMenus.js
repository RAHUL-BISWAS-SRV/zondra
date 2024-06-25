import { taskHistoryList } from "@/Datas/TaskData";
import { useContext } from "react";
import { GlobalStore } from "@/ContextAPI/Store";
import { filterTaskContainerItem } from "@/Functions/Functions";

const TaskMenus = () => {
  const { activeTaskBtn, setActiveTaskBtn, allTasks, setTaskData } = useContext(GlobalStore);

  const taskFilterList = [
    {
      id: "today",
      title: "Today",
      icon: "📅", // Calendar icon
      count: allTasks?.todayTasks?.length || 0,
    },
    {
      id: "all",
      title: "All",
      icon: "📋", // List icon
      count: allTasks?.allActiveTask?.length || 0,
    },
    {
      id: "week",
      title: "This Week",
      icon: "🗓️", // Week calendar icon
      count: allTasks?.thisWeekTasks?.length || 0,
    },
    {
      id: "month",
      title: "This Month",
      icon: "🗓️", // Month calendar icon
      count: allTasks?.thisMonthTasks?.length || 0,
    },
  ];

  const taskCategoryList = [
    {
      id: "welcome",
      title: "Welcome",
      icon: "🙏",
      count: allTasks?.allWelcomeTasks?.length || 0,
    },
    {
      id: "work",
      title: "Work",
      icon: "💼",
      count: allTasks?.allWorkTasks?.length || 0,
    },
    {
      id: "personal",
      title: "Personal",
      icon: "🙇",
      count: allTasks?.allPersonalTasks?.length || 0,
    },
    {
      id: "shopping",
      title: "Shopping",
      icon: "🛒",
      count: allTasks?.allShoppingTasks?.length || 0,
    },
    {
      id: "learning",
      title: "Learning",
      icon: "📖",
      count: allTasks?.allLearningTasks?.length || 0,
    },
    {
      id: "fitness",
      title: "Fitness",
      icon: "🏋",
      count: allTasks?.allFitnessTasks?.length || 0,
    },
    {
      id: "birthday",
      title: "Birthday",
      icon: "🎂",
      count: allTasks?.allBirthdayTasks?.length || 0,
    },
    {
      id: "wishlist",
      title: "Wish List",
      icon: "😍",
      count: allTasks?.allWishlistTasks?.length || 0,
    },
  ];

  const taskContainerHandler = (id) =>{
    setActiveTaskBtn(id);
    getFilterTaskwithContainer(id, allTasks)
  }

  async function getFilterTaskwithContainer(id, task) {
    const filterTask = await filterTaskContainerItem(id, task);
    setTaskData(filterTask);
  }

  return (
    <div className="sidebarMenus">
      <div className="section">
        <p className="fw-bold title">Task</p>
        <div className="list">
          {taskFilterList.map((taskItem, index) => (
            <>
              <div
                className={`listItem ${
                  taskItem.id === activeTaskBtn ? "active" : null
                }`}
                key={index}
                onClick={() => taskContainerHandler(taskItem.id)}
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
          {taskCategoryList.map((taskItem,index) => (
            <>
              <div
                className={`listItem ${
                  taskItem.id === activeTaskBtn ? "active" : null
                }`}
                key={index}
                onClick={() => taskContainerHandler(taskItem.id)}
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
        <p className="fw-bold title">History</p>
        <div className="list">
          {taskHistoryList.map((taskItem, index) => (
            <>
              <div
                className={`listItem ${
                  taskItem.id === activeTaskBtn ? "active" : null
                }`}
                key={index}
                onClick={() => taskContainerHandler(taskItem.id)}
              >
                <div className="inner">
                  {taskItem.icon}
                  <p className="fw-bold">{taskItem.title}</p>
                </div>
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
