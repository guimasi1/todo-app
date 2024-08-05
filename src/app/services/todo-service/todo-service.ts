import { Injectable } from '@angular/core';
import { Todo } from '../../models/todo.model';

@Injectable({ providedIn: 'root' })
export class TodoService {
  todos = [
    {
      id: 't1',
      title: 'Clean the kitchen',
      content: 'Remove all the dirty plates',
    },
  ];

  addToDo(todo: Todo) {
    this.todos.push(todo);
  }

  removeToDo(id: string) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }

  get getTodos() {
    return this.todos;
  }
}
