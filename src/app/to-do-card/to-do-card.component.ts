import { Component} from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { HighlightButtonDirective } from '../directives/highlight-button.directive';
import { ToDoService } from '../services/to-do.service';
import { CommonModule } from '@angular/common';
import { Task } from '../models/task';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-to-do-card',
  standalone: true,
  imports: [CommonModule, HighlightButtonDirective, FormsModule],
  templateUrl: './to-do-card.component.html',
  styleUrl: './to-do-card.component.css'
})
export class ToDoCardComponent {
  @Input() task!: Task;

  constructor(private todoService: ToDoService) {};

  deleteTask() {
    this.todoService.deleteTask(this.task);
  }

  doneTask() {
    this.todoService.doneTask(this.task);
  }

  editTask() {
    this.todoService.openEdit(this.task);
  }
}
