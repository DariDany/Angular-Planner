import { Component } from '@angular/core';
import { AddTaskFormComponent } from '../add-task-form/add-task-form.component';
import { ToDoListComponent } from '../to-do-list/to-do-list.component';
import { ToDoService } from '../services/to-do.service';
import { OnInit } from '@angular/core';
import { Task } from '../models/task';
import { DoneTasksComponent } from '../done-tasks/done-tasks.component';
import { ModalWindowComponent } from '../modal-window/modal-window.component';
import { EditModalComponent } from '../edit-modal/edit-modal.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-to-do-page',
  standalone: true,
  imports: [AddTaskFormComponent, ToDoListComponent, DoneTasksComponent, ModalWindowComponent, CommonModule, EditModalComponent],
  templateUrl: './to-do-page.component.html',
  styleUrl: './to-do-page.component.css'
})
export class ToDoPageComponent implements OnInit {
  tasks: Task[] = [];
  doneTasks: Task[] = [];
  editTask!: Task;
  modalWin: boolean = false;
  editModal: boolean = false;
  
  constructor(private todoService: ToDoService) {};

  ngOnInit(){
    this.todoService.addTask$.subscribe(task => {
      this.tasks = [...this.tasks, task];
    });

    this.todoService.deleteTask$.subscribe(task => {
      this.tasks = this.tasks.filter(t => t.id !== task.id);
      this.doneTasks = this.doneTasks.filter(t => t.id !== task.id);
    });

    this.todoService.doneTask$.subscribe(task => {
      if (task.completed === true) {
        this.doneTasks = [...this.doneTasks, task];
        this.tasks = this.tasks.filter(t => t.id !== task.id);
      } else {
        this.tasks = [...this.tasks, task];
        this.doneTasks = this.doneTasks.filter(t => t.id !== task.id);
      }
    });

    this.todoService.openEdit$.subscribe(task => {
        this.editModal = true;
        this.editTask = task;
    });

    this.todoService.editTask$.subscribe(task => {
      this.tasks.forEach(t => {
        if(t.id === task.id) {
          t.title = task.title;
          t.deadline = task.deadline;
        }
      });
      this.doneTasks.forEach(t => {
        if(t.id === task.id) {
          t.title = task.title;
          t.deadline = task.deadline;
        }
      });
      this.editModal = false;
    });
  }

  showModal(){
    this.modalWin = true;
  }

  closeModal(){
    this.modalWin = false;
  }
}
