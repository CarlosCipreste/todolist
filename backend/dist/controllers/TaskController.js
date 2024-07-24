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
const TaskModel_1 = __importDefault(require("../models/TaskModel"));
const createTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const createdTask = yield TaskModel_1.default.createTask(req.body);
    return res.status(201).json(createdTask);
});
const getAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const tasks = yield TaskModel_1.default.getAll();
    return res.status(200).json(tasks);
});
const updateTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield TaskModel_1.default.updateTask(req.body);
    return res.status(204).json();
});
const deleteTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    yield TaskModel_1.default.deleteTask(id);
    return res.status(204).json();
});
exports.default = { createTask, getAll, updateTask, deleteTask };
