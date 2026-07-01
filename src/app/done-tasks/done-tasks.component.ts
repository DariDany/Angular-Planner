import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Task } from '../models/task';
import { ToDoCardComponent } from '../to-do-card/to-do-card.component';
import { HighlightCardDirective } from '../directives/highlight-card.directive';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-done-tasks',
  standalone: true,
  imports: [ToDoCardComponent, CommonModule, HighlightCardDirective],
  templateUrl: './done-tasks.component.html',
  styleUrl: './done-tasks.component.css'
})
export class DoneTasksComponent {
  @Input() doneList: Task[] = [];
}
