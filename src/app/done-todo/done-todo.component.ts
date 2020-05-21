import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoItem } from '../models/TodoItem';

@Component({
  selector: 'app-done-todo',
  templateUrl: './done-todo.component.html',
  styleUrls: ['./done-todo.component.scss']
})
export class DoneTodoComponent implements OnInit {

  @Input() finished: TodoItem;
  @Output() undo = new EventEmitter<TodoItem>();
  @Output() removeItem = new EventEmitter<TodoItem>();
  @Output() removeOldItem = new EventEmitter<TodoItem>();

  constructor() { }

  ngOnInit(): void {}

  redoItem() {
    this.undo.emit(this.finished);
  }
  remove() {
    this.removeItem.emit(this.finished);
  }
  removeOld() {
    this.removeOldItem.emit(this.finished);
  }

}
