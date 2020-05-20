import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoItem } from '../models/TodoItem';


@Component({
  selector: 'app-sort-list',
  templateUrl: './sort-list.component.html',
  styleUrls: ['./sort-list.component.scss']
})
export class SortListComponent implements OnInit {

  @Input() orderList: TodoItem;
  @Output() sortList = new EventEmitter<TodoItem>();

  constructor() { }

  ngOnInit(): void {
  }

  sortAZ() {
    this.sortList.emit();
  }

}
