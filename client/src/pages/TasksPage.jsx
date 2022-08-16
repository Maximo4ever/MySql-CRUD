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

  function RenderTasks() {
    if (tasks.length === 0) return <h3>No tasks yet</h3>;
    return tasks.map((task) => <TaskCard task={task} key={task.id} />);
  }
  return (
    <div>
      <h1>Tasks</h1>
      <RenderTasks />
    </div>
  );
}

export default TasksPage;
