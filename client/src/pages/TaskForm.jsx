import { Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useTasks } from "../context/TaskContext";

function TaskForm() {
  const { createTask, getTask, updateTask } = useTasks();
  const params = useParams();
  const navigate = useNavigate();
  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  useEffect(() => {
    const loadTask = async () => {
      if (params.id) {
        const task = await getTask(params.id);
        console.log(task);
        setTask({
          title: task.title,
          description: task.description,
        });
      }
    };
    loadTask();
  }, []);

  return (
    <div className="m-6">
      <Formik
        initialValues={task}
        enableReinitialize={true}
        onSubmit={async (values, actions) => {
          console.log(values);
          if (params.id) {
            await updateTask(params.id, values);
          } else {
            await createTask(values);
          }
          navigate("/");
          setTask({
            title: "",
            description: "",
          });
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <Form
            onSubmit={handleSubmit}
            className="bg-slate-300 p-4 max-w-sm rounded-md mx-auto"
          >
            <h1 className="text-xl text-center">
              {params.id ? "Edit Task" : "New Task"}
            </h1>
            <label className="block mt-2">Title</label>
            <input
              className="px-2 py-2 rounded-sm w-full"
              type="text"
              name="title"
              placeholder="Write a title"
              onChange={handleChange}
              value={values.title}
            />
            <label className="block mt-2">Description</label>
            <textarea
              className="px-2 py-2 rounded-sm w-full "
              name="description"
              rows="7"
              placeholder="Write a description"
              onChange={handleChange}
              value={values.description}
            ></textarea>
            <button
              className="block bg-indigo-500 px-3 py-1 mt-2 w-full"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Saving..." : "Save"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default TaskForm;
