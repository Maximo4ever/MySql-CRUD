import { Router } from "express";
import {
  getTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
} from "../controllers/task.controller.js";

const router = Router();

router.get("/tasks", getTasks); // Obtener TODAS las tareas

router.get("/tasks/:id", getTask); // Obtener UNA tarea especifica

router.post("/tasks", createTask); // Crear una tarea

router.put("/tasks/:id", updateTask); // Actualizar una tarea

router.delete("/tasks/:id", deleteTask); // Eliminar una tarea

export default router;
