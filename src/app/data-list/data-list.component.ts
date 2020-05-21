import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../models/TodoItem';

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.scss']
})
export class DataListComponent implements OnInit {

  listOfTodos: TodoItem[] = JSON.parse(localStorage.getItem('listOfTodos')) || [];
  finishedTodos: TodoItem[] = JSON.parse(localStorage.getItem('oldTodos')) || [];

  constructor() { }

  ngOnInit(): void {}

  storeItem() {
    localStorage.setItem('listOfTodos', JSON.stringify(this.listOfTodos));
  }
  storeFinishedItem() {
    localStorage.setItem('oldTodos', JSON.stringify(this.finishedTodos));
  }
  addItem(e: TodoItem) {
    this.listOfTodos.push(e);
    this.storeItem();
    return this.listOfTodos;
  }
  itemDone(done: TodoItem) {
    if(done.isDone === false) {
      done.isDone = true;
      let listPosition = this.listOfTodos.indexOf(done);
      this.listOfTodos.splice(listPosition, 1);
      this.finishedTodos.push(done);
      localStorage.setItem('oldTodos', JSON.stringify(this.finishedTodos));
      localStorage.setItem('listOfTodos', JSON.stringify(this.listOfTodos));
    } else {
      done.isDone = false;
      let listPosition = this.finishedTodos.indexOf(done);
      this.finishedTodos.splice(listPosition, 1);
      this.listOfTodos.push(done);
      localStorage.setItem('listOfTodos', JSON.stringify(this.listOfTodos));
      localStorage.setItem('oldTodos', JSON.stringify(this.finishedTodos));
    }
  }
  removeItem(removeItem: TodoItem) {
    let todo = this.listOfTodos.indexOf(removeItem);
    this.listOfTodos.splice(todo, 1);
    localStorage.setItem('listOfTodos', JSON.stringify(this.listOfTodos));
  }
  removeOldItem(removeOldItem: TodoItem) {
    let oldTodo = this.finishedTodos.indexOf(removeOldItem);
    this.finishedTodos.splice(oldTodo, 1);
    localStorage.setItem('oldTodos', JSON.stringify(this.finishedTodos));
  }
  sort() {
    this.listOfTodos.sort( (a, b) => {
      a.todo < b.todo
      return -1;
    });
  }


}
