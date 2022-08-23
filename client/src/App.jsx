import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { TaskContextProvider } from "./context/TaskContext";
import NotFound from "./pages/NotFound";
import TaskForm from "./pages/TaskForm";
import TasksPage from "./pages/TasksPage";

function App() {
  return (
    <TaskContextProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<TasksPage />} />
        <Route path="/new" element={<TaskForm />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </TaskContextProvider>
  );
}

export default App;
