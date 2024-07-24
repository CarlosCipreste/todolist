import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogContent } from '@angular/material/dialog';

@Component({
  selector: 'app-deletedialog',
  standalone: true,
  imports: [MatDialogContent],
  templateUrl: './deletedialog.component.html',
  styleUrl: './deletedialog.component.scss'
})
export class DeletedialogComponent {

    constructor(
        public dialogRef:MatDialogRef<DeletedialogComponent>,
        @Inject(MAT_DIALOG_DATA) public task_id:number
    ){}

    onCancel():void {
        this.dialogRef.close();
    }

    onSave(): void {
        this.dialogRef.close(this.task_id);
    }
}
