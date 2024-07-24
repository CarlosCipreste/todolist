import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import ITask from '../../../interfaces/ITask';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-editdialog',
  standalone: true,
  imports: [MatDialogModule, MatFormFieldModule, MatSelectModule, FormsModule, MatInputModule],
  templateUrl: './editdialog.component.html',
  styleUrl: './editdialog.component.scss'
})
export class EditdialogComponent {

    constructor(
        public dialogRef: MatDialogRef<EditdialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data:ITask
    ){}

    onCancel():void {
        this.dialogRef.close();
    }

    onSave(): void {
        this.dialogRef.close(this.data);
        console.log(this.data.title)
        console.log(this.data.status)
        
    }
}
