import { Request, Response } from "express";
import TaskModel from "../models/TaskModel";

const createTask = async (req: Request, res: Response) => {
    const createdTask = await TaskModel.createTask(req.body);
    return res.status(201).json(createdTask);
};

const getAll = async (req:Request, res:Response) => {
    const tasks = await TaskModel.getAll();
    return res.status(200).json(tasks);
};

const updateTask = async (req:Request, res:Response) => {
    await TaskModel.updateTask(req.body);
    return res.status(204).json();  
};

const deleteTask = async (req:Request, res:Response) => {
    const {id} = req.params;
    await TaskModel.deleteTask(id);
    return res.status(204).json()
};

export default { createTask, getAll, updateTask, deleteTask };
