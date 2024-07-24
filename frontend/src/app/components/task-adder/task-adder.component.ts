import { Component, EventEmitter, input, OnInit, Output, output } from '@angular/core';
import ITask from '../../../interfaces/ITask';
import { TaskService } from '../../services/task.service';
import { TaskTableComponent } from '../task-table/task-table.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@Component({
    selector: 'app-task-adder',
    standalone: true,
    imports: [TaskTableComponent, MatProgressSpinnerModule],
    templateUrl: './task-adder.component.html',
    styleUrl: './task-adder.component.scss'
})
export class TaskAdderComponent implements OnInit {

    isLoading: boolean = false;
    tasks: ITask[] = [];

    // Instancia do TaskService para fazer operações
    constructor(private taskService: TaskService) { }

    // Ao iniciar, as tarefas são carregadas
    ngOnInit(): void {
        this.getTasks();
    }


    async addTask() {
        // Captura o elemento HTML
        const taskTitle: HTMLInputElement | null = document.querySelector('.input-task');

        if (taskTitle?.value) {
            try {
                // A Tarefa é adicionada e a tabela recarregada
                this.isLoading = true;
                await this.taskService.addTask({ title: taskTitle.value });
                await this.getTasks();
                taskTitle.value = "";

            } catch (error) {
                console.error(error);
            }
            finally {
                // função anonima para desativar o overlay de loading
                setTimeout(() => {
                    this.isLoading = false;
                },1500)
            }
        }
    }

    //Função para carregar as tarefas
    async getTasks() {
        try {
            this.tasks = await this.taskService.getTasks();
        } catch (error) {
            console.error('Error fetching tasks', error);
        }
    }


    async updateTask(task: ITask) {
        try {
            this.isLoading = true
            await this.taskService.updateTask(task);
            await this.getTasks();
        } catch (error) {
            console.error('Error updating task', error);
        }
        finally {
            // função anonima para desativar o overlay de loading
            setTimeout(() => {
                this.isLoading = false;
            },1500)
        }
    }

    async deleteTask(taskId: number) {
        try {
            this.isLoading = true
            await this.taskService.deleteTask(taskId);
            await this.getTasks();
        } catch (error) {
            console.error('Error deleting task', error);
        }
        finally {
            // função anonima para desativar o overlay de loading
            setTimeout(() => {
                this.isLoading = false;
            },1500)
        }
    }
}