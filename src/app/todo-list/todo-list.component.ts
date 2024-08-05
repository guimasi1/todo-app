import { Component, inject } from '@angular/core';
import { TodoService } from '../services/todo-service/todo-service';
import { Todo } from '../models/todo.model';
import { TodoComponent } from '../todo/todo.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [TodoComponent, FormsModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
})
export class TodoListComponent {
  todoService = inject(TodoService);
  todos: Todo[];
  enteredTitle: string = '';
  enteredContent: string = '';

  constructor() {
    this.todos = this.todoService.todos;
  }

  onAddTodo() {
    const id = Math.floor(Math.random() * 1000000).toString();
    const todo = {
      id,
      title: this.enteredTitle,
      content: this.enteredContent,
    };
    this.todoService.addToDo(todo);
    this.enteredContent = '';
    this.enteredTitle = '';
  }
}
