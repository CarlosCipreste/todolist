import { Router } from "express";
import TaskController from "./controllers/TaskController";
import tasksMiddleware from "./middlewares/tasksMiddleware";

const router = Router();

router.get("/tasks", TaskController.getAll);

router.post("/tasks", tasksMiddleware.validateTitle, TaskController.createTask);

router.put("/tasks", tasksMiddleware.validateEdit,TaskController.updateTask);

router.delete("/tasks/:id", tasksMiddleware.validateDelete,TaskController.deleteTask);

export default router;