import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import ITask from '../../../interfaces/ITask';
import { DatePipe } from '@angular/common';
import { MatDialog, MatDialogModule,  } from '@angular/material/dialog'
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


import { EditdialogComponent } from '../../dialog/editdialog/editdialog.component';
import { DeletedialogComponent } from '../../dialog/deletedialog/deletedialog.component';


@Component({
    selector: 'app-task-table',
    standalone: true,
    imports: [DatePipe, MatDialogModule, MatProgressSpinnerModule],
    templateUrl: './task-table.component.html',
    styleUrl: './task-table.component.scss',
})
export class TaskTableComponent {

    @Input() tasks: ITask[] = [];

    @Output() updateTaskEvent = new EventEmitter<ITask>();
    @Output() deleteTaskEvent = new EventEmitter<number>();

    constructor(public dialog: MatDialog) { }


    editDialog(task: ITask) {
        // Iniciando o Dialog/Modal para editar uma tarefa 
        const dialogRef = this.dialog.open(EditdialogComponent, {
            width: "600px",
            height: "350px",
            data: { ...task }
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result) { this.updateTaskEvent.emit(result); }
        });
    }

    deleteDialog(taskId: number) {
        // Iniciando o Dialog/Modal para apagar uma tarefa
        const dialogRef = this.dialog.open(DeletedialogComponent, {
            width: "600px",
            height: "250px",
            data: taskId,
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result) { this.deleteTaskEvent.emit(result); }
        })
    }

}
