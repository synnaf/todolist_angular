import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { TodoItem } from '../models/TodoItem';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {

  @Input() todoItem: TodoItem;
  @Input() new: TodoItem;
  @Output() newTodo = new EventEmitter<TodoItem>();

  // den här komponenten kommunicerar med klassen Todo
  constructor() { }

  ngOnInit(): void {}

  showForm: boolean = false;

  handleForm(inputWhat: string, inputWhen: Date, inputWho: string ) {
    let newItem: TodoItem = {
      todo: inputWhat,
      when: inputWhen,
      by: inputWho,
      isDone: false
    };
    this.newTodo.emit(newItem);
  }


}
