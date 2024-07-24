import { Injectable } from '@angular/core';
import axios, { AxiosResponse } from 'axios';
import ITask from '../../interfaces/ITask';

@Injectable({
    providedIn: 'root',
})

export class TaskService {
    private apiUrl = 'http://localhost:3333/tasks';

    async getTasks(): Promise<ITask[]> {
        try {
            const response: AxiosResponse<ITask[]> = await axios.get(this.apiUrl);
            return response.data;
        } catch (error) {
            console.error('Error fetching tasks', error);
            throw error;
        }
    }

    async addTask(task: { title: string }): Promise<void> {
        try {
            await axios.post(this.apiUrl, task);
        } catch (error) {
            console.error('Error adding task', error);
            throw error;
        }
    }

    async updateTask(task: ITask): Promise<void> {
        try {
            await axios.put(this.apiUrl, task);
            this.getTasks();
        } catch (error) {
            console.error('Error updating task', error);
        }
    }

    async deleteTask(taskId: number): Promise<void> {
        try {
            await axios.delete(`${this.apiUrl}/${taskId}`);
          } catch (error) {
            console.error('Error deleting task', error);
            throw error;
          }
    }
}
