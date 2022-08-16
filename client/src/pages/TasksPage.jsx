import { useEffect, useState } from "react";
import { getTasksRequest } from "../api/tasks.api";
import TaskCard from "../components/TaskCard";

function TasksPage() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const loadTasks = async () => {
      const res = await getTasksRequest();
      setTasks(res.data);
    };
    loadTasks();
  }, []);

  return (
    <div>
      <h1>Tasks</h1>
      {tasks.map((task) => (
        <TaskCard task={task} key={task.id} />
      ))}
    </div>
  );
}

export default TasksPage;
