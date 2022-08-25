import { useEffect } from "react";
import TaskCard from "../components/TaskCard";
import { useTasks } from "../context/TaskContext";

function TasksPage() {
  const { tasks, loadTasks } = useTasks();

  useEffect(() => {
    loadTasks();
  }, []);

  function RenderTasks() {
    if (tasks.length === 0) return <h3>No tasks yet</h3>;
    return tasks.map((task) => <TaskCard task={task} key={task.id} />);
  }
  return (
    <div>
      <h1 className="text-4xl text-white text-center font-bold">Tasks</h1>
      <div className="grid grid-cols-3 gap-2 pt-3">
        <RenderTasks />
      </div>
    </div>
  );
}

export default TasksPage;
