import {
  ChangeDetectorRef,
  Component,
  inject,
  Input,
  signal,
} from '@angular/core';
import { Todo } from '../models/todo.model';
import { TodoService } from '../services/todo-service/todo-service';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css',
})
export class TodoComponent {
  @Input() todo!: Todo;

  todoService = inject(TodoService);

  onCompleted() {
    console.log(this.todo.id);
    this.todoService.removeToDo(this.todo.id);
  }
}
