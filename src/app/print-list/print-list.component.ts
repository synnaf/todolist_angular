import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { TodoItem } from '../models/TodoItem';

@Component({
  selector: 'app-print-list',
  templateUrl: './print-list.component.html',
  styleUrls: ['./print-list.component.scss']
})
export class PrintListComponent implements OnInit {

  @Input() newTodo: TodoItem;

  // @Output() openForm = new EventEmitter<TodoItem>();

  constructor() { }

  ngOnInit(): void {
  }


}
