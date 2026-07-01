import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {
  private addTaskSource = new Subject<Task>();
  addTask$ = this.addTaskSource.asObservable();
  addTask(task: Task) {
    this.addTaskSource.next(task);
  }

  private deleteTaskSource = new Subject<Task>();
  deleteTask$ = this.deleteTaskSource.asObservable();
  deleteTask(task: Task){
    this.deleteTaskSource.next(task);
  }

  private doneTaskSource = new Subject<Task>();
  doneTask$ = this.doneTaskSource.asObservable();
  doneTask(task: Task) {
    this.doneTaskSource.next(task);
  }

  private openEditSource = new Subject<Task>();
  openEdit$ = this.openEditSource.asObservable();
  openEdit(task: Task){
    this.openEditSource.next(task);
  }

  private editTaskSource = new Subject<Task>();
  editTask$ = this.editTaskSource.asObservable();
  editTask(task: Task) {
    this.editTaskSource.next(task);
  }
}
