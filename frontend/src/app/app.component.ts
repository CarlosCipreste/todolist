import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskAdderComponent } from './components/task-adder/task-adder.component';
import { TaskTableComponent } from './components/task-table/task-table.component';
import { MatDialogModule } from '@angular/material/dialog';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TaskAdderComponent, TaskTableComponent, MatDialogModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Lista de Tarefas';
}
