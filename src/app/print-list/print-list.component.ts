import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { TodoItem } from '../models/TodoItem';

@Component({
  selector: 'app-print-list',
  templateUrl: './print-list.component.html',
  styleUrls: ['./print-list.component.scss']
})
export class PrintListComponent implements OnInit {

  @Input() todo: TodoItem;
  @Output() done = new EventEmitter<TodoItem>();
  @Output() removeItem = new EventEmitter<TodoItem>();

  constructor() { }

  ngOnInit(): void {}

  // när denna funktion körs, skicka datan
  isDone() {
    this.done.emit(this.todo);
  }

  remove() {
    this.removeItem.emit(this.todo);
  }

}
