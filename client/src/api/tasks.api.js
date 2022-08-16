import axios from "axios";

export const getTasksRequest = async (tasks) => {
  return await axios.get("http://localhost:4000/tasks");
};

export const createTaskRequest = async (task) => {
  return await axios.post("http://localhost:4000/tasks", task);
};
