import { Component, OnInit, Input } from '@angular/core';
import { TodoItem } from '../models/TodoItem';

@Component({
  selector: 'app-done-todo',
  templateUrl: './done-todo.component.html',
  styleUrls: ['./done-todo.component.scss']
})
export class DoneTodoComponent implements OnInit {

  @Input() finished: TodoItem;

  constructor() { }

  ngOnInit(): void {
  }

}
