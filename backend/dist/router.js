"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const TaskController_1 = __importDefault(require("./controllers/TaskController"));
const tasksMiddleware_1 = __importDefault(require("./middlewares/tasksMiddleware"));
const router = (0, express_1.Router)();
router.get("/tasks", TaskController_1.default.getAll);
router.post("/tasks", tasksMiddleware_1.default.validateTitle, TaskController_1.default.createTask);
router.put("/tasks", tasksMiddleware_1.default.validateEdit, TaskController_1.default.updateTask);
router.delete("/tasks/:id", tasksMiddleware_1.default.validateDelete, TaskController_1.default.deleteTask);
exports.default = router;
