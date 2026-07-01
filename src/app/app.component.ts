import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToDoPageComponent } from './to-do-page/to-do-page.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ToDoPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'to-do-project';
}
