import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { TaskContextProvider } from "./context/TaskContext";
import NotFound from "./pages/NotFound";
import TaskForm from "./pages/TaskForm";
import TasksPage from "./pages/TasksPage";

function App() {
  return (
    <main className="bg-zinc-900 h-screen">
      <TaskContextProvider>
        <Navbar />
        <div className="container mx-auto py-4">
          <Routes>
            <Route path="/" element={<TasksPage />} />
            <Route path="/new" element={<TaskForm />} />
            <Route path="/edit/:id" element={<TaskForm />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </TaskContextProvider>
    </main>
  );
}

export default App;
