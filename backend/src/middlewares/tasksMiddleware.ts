import { Request, Response, NextFunction } from 'express';
import ITask from '../models/Interfaces/ITask';

// Função genérica para validar campos obrigatórios e não vazios
const validateField = (field: string, fieldName: string) => {
    return (req: Request, res: Response, next: NextFunction) => {
        const value = req.body[field];

        if (!value) {
            return res.status(400).json({ error: `${fieldName} é obrigatório` });
        }

        if (typeof value !== 'string' || value.trim() === '') {
            return res.status(400).json({ error: `${fieldName} não pode conter apenas espaços` });
        }

        next();
    };
};

// Middleware específico para validação de título
const validateTitle = validateField('title', 'Título');

// Middleware específico para validação de edição
const validateEdit = (req: Request, res: Response, next: NextFunction) => {
    const { title, status } = req.body;

    if (!title || !status) {
        return res.status(400).json({ error: "Os campos 'title' e 'status' são obrigatórios" });
    }

    if (typeof title !== 'string' || title.trim() === '' ||
        typeof status !== 'string' || status.trim() === '') {
        return res.status(400).json({ error: "Os campos 'title' e 'status' não podem conter apenas espaços" });
    }

    next();
};

// Middleware específico para validação de exclusão
const validateDelete = (req: Request, res: Response, next: NextFunction) => {

    const task_id = parseInt(req.params.id);

    if(!task_id){
        return res.status(400).json({ error: "O campo task_id precisa ser um número" });
    }

    next();
};

export default {
    validateTitle,
    validateEdit,
    validateDelete,
};
