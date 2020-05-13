import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { TodoItem } from '../models/TodoItem';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {

  @Input() todoItem: TodoItem;

  @Output() newTodo = new EventEmitter<TodoItem>();

  // den här komponenten kommunicerar med klassen Todo
  constructor() { }

  ngOnInit(): void {
  }

  // när man trycker på add ska formuläret visas, showForm blir true
  showForm: boolean = false;

}
