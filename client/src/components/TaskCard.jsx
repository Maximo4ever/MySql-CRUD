import { useNavigate } from "react-router-dom";
import { useTasks } from "../context/TaskContext";

function TaskCard({ task }) {
  const { deleteTask, toggleTaskDone } = useTasks();
  const navigate = useNavigate();
  const handleDone = async () => {
    await toggleTaskDone(task.id);
  };

  return (
    <div className="bg-zinc-800 p-4 text-white">
      <header className="flex justify-between">
        <h3 className="text-xl font-semibold">{task.title}</h3>
        <span>{task.done == 1 ? "✅" : "❌"}</span>
      </header>
      <p>{task.description}</p>
      <span>{task.createdAt}</span>
      <div className="flex gap-x-1 text-white mt-1">
        <button
          className="bg-red-500 px-2 py-1"
          onClick={() => deleteTask(task.id)}
        >
          Delete
        </button>
        <button
          className="bg-slate-600 px-2 py-1"
          onClick={() => navigate(`/edit/${task.id}`)}
        >
          Edit
        </button>
        <button className="bg-green-700 px-2 py-1" onClick={handleDone}>
          Toggle Task
        </button>
      </div>
    </div>
  );
}

export default TaskCard;
