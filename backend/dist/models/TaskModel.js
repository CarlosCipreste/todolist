"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("./connection"));
const EStatus_1 = __importDefault(require("./enums/EStatus"));
const createTask = (task) => __awaiter(void 0, void 0, void 0, function* () {
    const { title } = task;
    const created_at = new Date().toISOString();
    const query = "INSERT INTO tasks (title, status, created_at) VALUES (?, ?, ?)";
    const [result] = yield connection_1.default.execute(query, [
        title,
        EStatus_1.default.PENDENTE,
        created_at,
    ]);
    return { insertId: result.insertId };
});
const getAll = () => __awaiter(void 0, void 0, void 0, function* () {
    const [tasks] = yield connection_1.default.execute("SELECT * FROM tasks");
    return tasks;
});
const updateTask = (task) => __awaiter(void 0, void 0, void 0, function* () {
    const { task_id, title, status } = task;
    const query = "UPDATE tasks SET title = ?, status = ? where task_id = ?";
    const [updatedTask] = yield connection_1.default.execute(query, [title, status, task_id]);
    return updatedTask;
});
const deleteTask = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const query = "DELETE FROM tasks where task_id = ?";
    yield connection_1.default.execute(query, [id]);
});
exports.default = {
    createTask,
    getAll,
    updateTask,
    deleteTask,
};
