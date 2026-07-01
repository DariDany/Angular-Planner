import { Component, OnInit, Input} from '@angular/core';
import { ToDoService } from '../services/to-do.service';
import { Task } from '../models/task';

@Component({
  selector: 'app-edit-modal',
  standalone: true,
  imports: [],
  templateUrl: './edit-modal.component.html',
  styleUrl: './edit-modal.component.css'
})
export class EditModalComponent {
  @Input() task!: Task;

  constructor(private todoService: ToDoService) {};

  editTask(title: string, deadline: string){
    this.todoService.editTask({
        id: this.task.id,
        title: title ? title : this.task.title,
        deadline: deadline ? new Date(deadline) : this.task.deadline,
        completed: this.task.completed
      });
  }
}
