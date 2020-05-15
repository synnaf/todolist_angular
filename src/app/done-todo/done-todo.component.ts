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

  constructor() { }

  ngOnInit(): void {
  }

  // när denna funktion körs, skicka datan
  redoItem() {
    this.undo.emit(this.finished);
  }

}
