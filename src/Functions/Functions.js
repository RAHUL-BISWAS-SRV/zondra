import { ref, get, set, getDatabase, remove } from "firebase/database";
import { app } from "@/DB/firebaseConfig";
import { v4 as uuidv4 } from "uuid";
import Cookies from "js-cookie";
const db = getDatabase(app);

// get Token from localStorage
export async function getToken() {
  const token = Cookies.get("authToken");
  return token ? token : false;
}

// set token to localStorage
export async function setToken(token) {
  Cookies.set("authToken", token, { expires: 7 });
}

// remove token from localStorage
export async function removeToken() {
  const result = await Cookies.remove("authToken");
  return result;
}

// register new user
export async function registerNewUser(userData) {
  try {
    const usersRef = ref(db, "/users");
    const usersSnapshot = await get(usersRef);
    const users = usersSnapshot.val() || {};
    const existingUser = Object.values(users).find(
      (user) => user.email === userData.email
    );
    if (existingUser) {
      return { status: false, message: "User already exists" };
    }

    const newUserData = {
      id: generateUUID(),
      name: userData.name,
      email: userData.email,
      mobile: "",
      bio: "",
      designation: "",
      status: "active",
      password: userData.password,
      createdAt: Date.now(),
    };

    await set(ref(db, "users/" + newUserData.id), newUserData);
    setToken(newUserData.id);
    return {
      status: true,
      message: "Register successfull",
      token: newUserData.id,
    };
  } catch (error) {
    console.error("Error adding user data:", error.message);
    return {
      status: false,
      message: "Error adding user data: " + error.message,
    };
  }
}

// login user with password
export async function loginUsers(userData) {
  try {
    const usersRef = ref(db, "/users");
    const usersSnapshot = await get(usersRef);
    const users = usersSnapshot.val() || {};
    const user = Object.values(users).find(
      (user) => user.email === userData.email
    );
    if (!user) {
      return { status: false, message: "User not found" };
    }
    if (user.password !== userData.password) {
      return { status: false, message: "Incorrect password" };
    }
    setToken(user.id);
    return {
      status: true,
      message: "Login successful",
      token: user.id,
    };
  } catch (error) {
    console.error("Error logging in:", error.message);
    return {
      status: false,
      message: "Error logging in: " + error.message,
    };
  }
}

// getUserProfileDetails
export async function getUserProfileDetails(token) {
  if (!token) {
    return { status: false, message: "Missing Token" };
  }
  try {
    const usersRef = ref(db, "/users");
    const usersSnapshot = await get(usersRef);
    const users = usersSnapshot.val() || {};
    const existUser = Object.values(users).find((user) => user.id === token);
    // console.log("users", token)
    if (!existUser) {
      return { status: false, message: "User not found" };
    }
    return {
      status: true,
      details: {
        id: existUser.id,
        name: existUser.name,
        email: existUser.email,
        mobile: existUser.mobile || "",
        bio: existUser.bio || "",
        designation: existUser.designation || "",
        status: existUser.status,
        createdAt: existUser.createdAt,
      },
    };
  } catch (error) {
    console.error("Error fetching user profile:", error.message);
    return {
      status: false,
      message: "Error fetching user profile: " + error.message,
    };
  }
}

// generateUUID
export function generateUUID() {
  return uuidv4();
}

// get all tasks in the database
export const getAllTask = async (userId) => {
  if (!userId) return "Token is required";
  const userTaskRef = ref(db, `tasks/${userId}`);
  try {
    const snapshot = await get(userTaskRef);
    if (snapshot.exists()) {
      const task = snapshot.val();
      return { success: true, task: task };
    } else {
      return { success: true, task: [] };
    }
  } catch (error) {
    console.error("Error fetching task:", error);
    return {
      success: false,
      message: "An error occurred while fetching task.",
    };
  }
};

export const getFilterTask = async (userId) => {
  if (!userId) return "Token is required";
  const result = await getAllTask(userId);
  if (result && result.task && result.task.length > 0) {
    const allTasks = result.task.sort(
      (a, b) => parseTimestamp(b.timestamp) - parseTimestamp(a.timestamp)
    );

    const allActiveTask = allTasks.filter(
      (taskitem) => taskitem.status === "active"
    );
    const allDeletedTask = allTasks.filter(
      (taskitem) => taskitem.status === "deleted"
    );
    const allCompletedTask = allTasks.filter(
      (taskitem) => taskitem.status === "completed"
    );

    const allWelcomeTasks = allActiveTask.filter(
      (taskitem) => taskitem.category === "welcome"
    );
    const allWorkTasks = allActiveTask.filter(
      (taskitem) => taskitem.category === "work"
    );
    const allPersonalTasks = allActiveTask.filter(
      (taskitem) => taskitem.category === "personal"
    );
    const allShoppingTasks = allActiveTask.filter(
      (taskitem) => taskitem.category === "shopping"
    );
    const allLearningTasks = allActiveTask.filter(
      (taskitem) => taskitem.category === "learning"
    );
    const allFitnessTasks = allActiveTask.filter(
      (taskitem) => taskitem.category === "fitness"
    );
    const allBirthdayTasks = allActiveTask.filter(
      (taskitem) => taskitem.category === "birthday"
    );
    const allWishlistTasks = allActiveTask.filter(
      (taskitem) => taskitem.category === "wishlist"
    );

    const todayIs = getDefaultDueDate();
    const { startOfWeek, endOfWeek } = getStartAndEndOfWeek();
    const firstDayOfMonth = getFirstDayOfCurrentMonth();
    const lastDayOfMonth = getLastDateOfCurrentMonth();

    const todayTasks = allActiveTask.filter(
      (taskitem) => taskitem.dueDate === todayIs
    );

    const pendingTasks = allActiveTask.filter(
      (taskitem) => taskitem.dueDate <= todayIs
    );

    const thisWeekTasks = allActiveTask.filter((taskitem) => {
      return taskitem.dueDate >= startOfWeek && taskitem.dueDate <= endOfWeek;
    });

    const thisMonthTasks = allActiveTask.filter((taskitem) => {
      return (
        taskitem.dueDate >= firstDayOfMonth &&
        taskitem.dueDate <= lastDayOfMonth
      );
    });

    const taskdata = {
      allActiveTask,
      allDeletedTask,
      allCompletedTask,
      allWelcomeTasks,
      allWorkTasks,
      allPersonalTasks,
      allShoppingTasks,
      allLearningTasks,
      allFitnessTasks,
      allBirthdayTasks,
      allWishlistTasks,
      todayTasks,
      thisWeekTasks,
      thisMonthTasks,
      pendingTasks,
    };

    return taskdata;
  } else {
    return false;
  }
};

// add new task function
export const addNewTask = async (userId, taskData) => {
  if (!userId) return "Token is required";
  const userTaskRef = ref(db, `tasks/${userId}`);

  const generatedUniqueId = uuidv4();

  const newTaskdata = {
    id: generatedUniqueId,
    title: taskData.title,
    category: taskData.category,
    dueDate: taskData.dueDate,
    status: "active",
    timestamp: formatTimestamp(new Date().getTime()),
  };

  try {
    const snapshot = await get(userTaskRef);
    if (snapshot.exists()) {
      const notes = snapshot.val();
      const notesArray = Array.isArray(notes) ? notes : Object.values(notes);
      notesArray.push(newTaskdata);
      await set(userTaskRef, notesArray);
    } else {
      const notesArray = [newTaskdata];
      await set(userTaskRef, notesArray);
    }
    return { success: true, message: "Task added successfully." };
  } catch (error) {
    console.error("Error adding new task:", error);
    return {
      success: false,
      message: "An error occurred while adding the task.",
    };
  }
};

// change the task status
export const changeTaskItemStatus = async (userId, taskId, status) => {
  if (!userId || !taskId || !status) {
    return { success: false, message: "Some required field is missing" };
  }

  const userTaskRef = ref(db, `tasks/${userId}`);

  try {
    const snapshot = await get(userTaskRef);
    if (snapshot.exists()) {
      const tasks = snapshot.val();
      const tasksArray = Array.isArray(tasks) ? tasks : Object.values(tasks);
      
      const taskIndex = tasksArray.findIndex(task => task && task.id === taskId);

      if (taskIndex !== -1) {
        tasksArray[taskIndex].status = status;
        tasksArray[taskIndex].timestamp = formatTimestamp(new Date().getTime());

        await set(userTaskRef, tasksArray);
        return { success: true, message: "Task updated successfully." };
      } else {
        return { success: false, message: "Task update failed" };
      }
    } else {
      return { success: false, message: "No tasks found" };
    }
  } catch (error) {
    console.error("Error updating task status:", error);
    return {
      success: false,
      message: "An error occurred while updating the task status.",
    };
  }
};

export const editTaskItems = async (userId, taskId, updatedData) => {
  if (!userId || !taskId) return { success: false, message: "User ID and Task ID are required" };

  const userTaskRef = ref(db, `tasks/${userId}`);

  try {
    const snapshot = await get(userTaskRef);
    if (snapshot.exists()) {
      const tasks = snapshot.val();
      const tasksArray = Array.isArray(tasks) ? tasks : Object.values(tasks);
      const taskIndex = tasksArray.findIndex(task => task && task.id === taskId);

      if (taskIndex !== -1) {
        const updatedTask = {
          ...tasksArray[taskIndex],
          title: updatedData.title || tasksArray[taskIndex].title,
          category: updatedData.category || tasksArray[taskIndex].category,
          dueDate: updatedData.dueDate || tasksArray[taskIndex].dueDate,
          timestamp: formatTimestamp(new Date().getTime()),
        };

        if (Array.isArray(tasks)) {
          tasks[taskIndex] = updatedTask;
        } else {
          const taskKey = Object.keys(tasks)[taskIndex];
          tasks[taskKey] = updatedTask;
        }

        await set(userTaskRef, tasks);
        return { success: true, message: "Task updated successfully." };
      } else {
        return { success: false, message: "Task not found." };
      }
    } else {
      return { success: false, message: "No tasks found for this user." };
    }
  } catch (error) {
    console.error("Error updating task:", error);
    return {
      success: false,
      message: "An error occurred while updating the task.",
    };
  }
};


// delete single task from the database
export const deleteTrashTaskItems = async (userId, taskId) => {
  if (!userId || !taskId) return "User ID and Task ID are required";
  const userTaskRef = ref(db, `tasks/${userId}`);

  try {
    const snapshot = await get(userTaskRef);
    if (snapshot.exists()) {
      const tasks = snapshot.val();
      const tasksArray = Array.isArray(tasks) ? tasks : Object.values(tasks);
      const updatedTasks = tasksArray.filter((task) => task.id !== taskId);

      if (updatedTasks.length !== tasksArray.length) {
        await set(userTaskRef, updatedTasks);
        return { success: true, message: "Task deleted successfully." };
      } else {
        return { success: false, message: "Task deleted failed." };
      }
    } else {
      return { success: false, message: "No tasks found" };
    }
  } catch (error) {
    console.error("Error deleting task:", error);
    return {
      success: false,
      message: "An error occurred while deleting the task.",
    };
  }
};

export const clearTrashTask = async (userId) => {
  if (!userId) return { success: false, message: "User ID is required!" };
  const userNotesRef = ref(db, `tasks/${userId}`);

  try {
    const snapshot = await get(userNotesRef);
    if (snapshot.exists()) {
      const notes = snapshot.val();
      const deletePromises = [];

      Object.keys(notes).forEach((key) => {
        if (notes[key]?.status === "deleted") {
          const noteRef = ref(db, `tasks/${userId}/${key}`);
          deletePromises.push(remove(noteRef));
        }
      });

      await Promise.all(deletePromises);
      return {
        success: true,
        message: "Trash cleared successfully.",
      };
    } else {
      return { success: false, message: "No notes found for user." };
    }
  } catch (error) {
    console.error("Error clearing trash:", error);
    return {
      success: false,
      message: "An error occurred while clearing trash notes.",
    };
  }
};

// filter task data by category for container
export const filterTaskContainerItem = async (id, allTask) => {
  if (!id) return "please send page id";
  switch (id) {
    case "all":
      return {
        id: "all",
        tasks: allTask.allActiveTask,
        content: "All Active Tasks",
      };
    case "today":
      return {
        id: "today",
        tasks: allTask.todayTasks,
        content: "Today's Tasks",
      };
    case "week":
      return {
        id: "week",
        tasks: allTask.thisWeekTasks,
        content: "This Week Tasks",
      };
    case "month":
      return {
        id: "month",
        tasks: allTask.thisMonthTasks,
        content: "This Month Tasks",
      };
    case "welcome":
      return {
        id: "welcome",
        tasks: allTask.allWelcomeTasks,
        content: "Welcome Tasks",
      };
    case "work":
      return {
        id: "work",
        tasks: allTask.allWorkTasks,
        content: "Work Tasks",
      };
    case "personal":
      return {
        id: "personal",
        tasks: allTask.allPersonalTasks,
        content: "Personal Tasks",
      };
    case "shopping":
      return {
        id: "shopping",
        tasks: allTask.allShoppingTasks,
        content: "Shopping Tasks",
      };
    case "learning":
      return {
        id: "learning",
        tasks: allTask.allLearningTasks,
        content: "Learning Tasks",
      };
    case "fitness":
      return {
        id: "fitness",
        tasks: allTask.allFitnessTasks,
        content: "Fitness Tasks",
      };
    case "finance":
      return {
        id: "finance",
        tasks: allTask.allFinanceTasks,
        content: "Finance Tasks",
      };
    case "birthday":
      return {
        id: "birthday",
        tasks: allTask.allBirthdayTasks,
        content: "Birthday Tasks",
      };
    case "wishlist":
      return {
        id: "wishlist",
        tasks: allTask.allWishlistTasks,
        content: "Wishlist Tasks",
      };
    case "complete":
      return {
        id: "complete",
        tasks: allTask.allCompletedTask,
        content: "Completed Tasks",
      };
    case "pending":
      return {
        id: "pending",
        tasks: allTask.pendingTasks,
        content: "Pending Tasks",
      };
    case "trash":
      return {
        id: "trash",
        tasks: allTask.allDeletedTask,
        content: "Trash",
      };
    case "draft":
      return {
        id: "draft",
        tasks: await getDraftTasks(),
        content: "Drafts Tasks",
      };
    default:
      return {
        id: "unknown",
        tasks: [],
        content: "Unknown Category",
      };
  }
};
// getMotivateMessage
export function getMotivateMessage() {
  const messages = {
    morning: [
      "Rise and shine, it's a new day!",
      "Embrace the day with joy!",
      "New day, new hopes, new joy!",
      "Today is yours, make it!",
      "Shine bright like the sun!",
    ],
    afternoon: [
      "Keep pushing, stay strong!",
      "Believe in yourself always!",
      "You got this, keep going!",
      "Stay positive, stay focused!",
      "Keep moving, don't stop!",
    ],
    evening: [
      "Almost there, stay focused!",
      "You're doing great, keep on!",
      "Finish strong, you're close!",
      "Keep going, you’re great!",
      "Stay motivated, keep it up!",
    ],
    night: [
      "Well done today, rest easy!",
      "Dream big, sleep tight!",
      "Good night, rest well!",
      "Time to rest, good job!",
      "Sleep well, sweet dreams!",
    ],
  };

  const currentTime = new Date();
  const currentHour = currentTime.getHours();

  let timeOfDay;
  if (currentHour >= 5 && currentHour < 12) {
    timeOfDay = "morning";
  } else if (currentHour >= 12 && currentHour < 17) {
    timeOfDay = "afternoon";
  } else if (currentHour >= 17 && currentHour < 21) {
    timeOfDay = "evening";
  } else {
    timeOfDay = "night";
  }

  const selectedMessages = messages[timeOfDay];
  const randomIndex = Math.floor(Math.random() * selectedMessages.length);

  return selectedMessages[randomIndex];
}

// getCurrentDate
export function getCurrentDate() {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  let month = currentDate.getMonth() + 1;
  let day = currentDate.getDate();

  // Ensure month and day are two digits
  if (month < 10) {
    month = `0${month}`;
  }
  if (day < 10) {
    day = `0${day}`;
  }

  return `${year}-${month}-${day}`;
}

const formatTimestamp = (timestamp) => {
  const date = new Date(timestamp);
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  const year = date.getFullYear();
  const hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, "0");
  return `${day}/${month}/${year}-${hours}:${minutes}`;
};

const parseTimestamp = (timestamp) => {
  const [datePart, timePart] = timestamp.split("-");
  const [day, month, year] = datePart.split("/").map(Number);
  const [hours, minutes] = timePart.split(":").map(Number);
  return new Date(year, month - 1, day, hours, minutes);
};
// current date and time of the release
export const getDefaultDueDate = () => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const day = String(today.getDate()).padStart(2, "0");
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const year = today.getFullYear();
  return `${year}-${month}-${day}`;
};

const getStartAndEndOfWeek = () => {
  const today = new Date();
  const dayOfWeek = today.getDay(); // 0 (Sunday) to 6 (Saturday)
  const startOfWeek = new Date(today);
  const endOfWeek = new Date(today);

  // Adjust start to the previous Monday
  const diffToMonday = (dayOfWeek === 0 ? -6 : 1) - dayOfWeek;
  startOfWeek.setDate(today.getDate() + diffToMonday);
  startOfWeek.setHours(0, 0, 0, 0);

  // Adjust end to the next Sunday
  const diffToSunday = 7 - dayOfWeek;
  endOfWeek.setDate(today.getDate() + diffToSunday);
  endOfWeek.setHours(23, 59, 59, 999);

  const formatDate = (date) => {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${year}-${month}-${day}`;
  };

  return {
    startOfWeek: formatDate(startOfWeek),
    endOfWeek: formatDate(endOfWeek),
  };
};

// 1st day of the month
const getFirstDayOfCurrentMonth = () => {
  const today = new Date();
  const firstDay = new Date(today.getFullYear(), today.getMonth(), 1);

  const day = String(firstDay.getDate()).padStart(2, "0");
  const month = String(firstDay.getMonth() + 1).padStart(2, "0"); // getMonth() returns 0-indexed month
  const year = firstDay.getFullYear();

  return `${year}-${month}-${day}`;
};

// LastDateOfCurrentMonth
export const getLastDateOfCurrentMonth = () => {
  const today = new Date();
  const firstDayOfNextMonth = new Date(
    today.getFullYear(),
    today.getMonth() + 1,
    1
  );
  const lastDayOfCurrentMonth = new Date(firstDayOfNextMonth - 1);

  const day = String(lastDayOfCurrentMonth.getDate()).padStart(2, "0");
  const month = String(lastDayOfCurrentMonth.getMonth() + 1).padStart(2, "0"); // getMonth() returns 0-indexed month
  const year = lastDayOfCurrentMonth.getFullYear();

  return `${year}-${month}-${day}`;
};
