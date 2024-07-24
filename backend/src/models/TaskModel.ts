import connection from "./connection";
import ITask from "./Interfaces/ITask";
import EStatus from "./enums/EStatus";

const createTask = async (task: ITask) => {
    const { title } = task;
    const created_at = new Date().toISOString();

    const query =
        "INSERT INTO tasks (title, status, created_at) VALUES (?, ?, ?)";

    const [result]: any = await connection.execute(query, [
        title,
        EStatus.PENDENTE,
        created_at,
    ]);

    return { insertId: result.insertId };
};


const getAll = async () => {
    const [tasks] = await connection.execute("SELECT * FROM tasks");
    return tasks;
};


const updateTask = async (task: ITask) => {
    const { task_id, title, status } = task;

    const query = "UPDATE tasks SET title = ?, status = ? where task_id = ?";

    const [updatedTask] = await connection.execute(query, [title, status, task_id]);
    return updatedTask;
};


const deleteTask = async (id: string) => {
    const query = "DELETE FROM tasks where task_id = ?";
    await connection.execute(query, [id]);
};


export default {
  createTask,
  getAll,
  updateTask,
  deleteTask,
};
