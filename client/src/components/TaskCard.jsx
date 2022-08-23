import { deleteTaskRequest } from "../api/tasks.api";
import { useTasks } from "../context/TaskContext";

function TaskCard({ task }) {
  const { deleteTask } = useTasks();

  return (
    <div>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <span>{task.createdAt}</span>
      <span>{task.done === 1 ? "✔️" : "❌"}</span>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
      <button>Edit</button>
    </div>
  );
}

export default TaskCard;
