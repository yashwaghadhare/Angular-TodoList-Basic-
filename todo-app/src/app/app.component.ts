import { Component } from '@angular/core';
import { TodoComponent } from './todo/todo.component';

@Component({
  selector: 'app-root',
  template: `
    <h1>Todo App</h1>
    <app-todo></app-todo>
  `
})
export class AppComponent {}
