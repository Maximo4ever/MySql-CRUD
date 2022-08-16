import { Form, Formik } from "formik";
import { createTaskRequest } from "../api/tasks.api";

function TaskForm() {
  return (
    <div>
      <Formik
        initialValues={{ title: "", description: "" }}
        onSubmit={async (values, actions) => {
          console.log(values);
          try {
            const res = await createTaskRequest(values);
            console.log(res);
            actions.resetForm();
          } catch (error) {
            console.log(error);
          }
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <Form onSubmit={handleSubmit}>
            <label htmlFor="">Title</label>
            <input
              type="text"
              name="title"
              placeholder="Write a title"
              onChange={handleChange}
              value={values.title}
            />
            <label htmlFor="">Description</label>
            <textarea
              name="description"
              rows="10"
              placeholder="Write a description"
              onChange={handleChange}
              value={values.description}
            ></textarea>
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Saving..." : "Save"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default TaskForm;
