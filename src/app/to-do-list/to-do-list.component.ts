import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToDoCardComponent } from '../to-do-card/to-do-card.component';
import { HighlightCardDirective } from '../directives/highlight-card.directive';
import { Input } from '@angular/core';
import { Task } from '../models/task';

@Component({
  selector: 'app-to-do-list',
  standalone: true,
  imports: [CommonModule, ToDoCardComponent, HighlightCardDirective],
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.css'
})
export class ToDoListComponent {
  @Input() todoList: Task[] = [];
}
