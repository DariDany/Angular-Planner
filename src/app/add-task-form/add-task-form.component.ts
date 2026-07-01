import { Component, Output, EventEmitter} from '@angular/core';
import { HighlightButtonDirective } from '../directives/highlight-button.directive';
import { ToDoService } from '../services/to-do.service';

@Component({
  selector: 'app-add-task-form',
  standalone: true,
  imports: [HighlightButtonDirective],
  templateUrl: './add-task-form.component.html',
  styleUrl: './add-task-form.component.css'
})
export class AddTaskFormComponent {
  @Output() emptyTaskEvent = new EventEmitter<void>();

  constructor(private todoService: ToDoService) {};

  addTask(title: string, deadline: string){
    if (title && deadline) {
      this.todoService.addTask({
        id: Date.now(),
        title: title,
        deadline: new Date(deadline),
        completed: false
      });
    } else {
      this.emptyTaskEvent.emit();
    }
  }
}
