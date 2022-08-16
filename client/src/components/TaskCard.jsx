import { deleteTaskRequest } from "../api/tasks.api";

function TaskCard({ task }) {
  const handleDelete = async (id) => {
    try {
      const res = await deleteTaskRequest(id);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <span>{task.createdAt}</span>
      <span>{task.done === 1 ? "✔️" : "❌"}</span>
      <button onClick={() => handleDelete(task.id)}>Delete</button>
      <button>Edit</button>
    </div>
  );
}

export default TaskCard;
