import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../models/TodoItem';

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.scss']
})
export class DataListComponent implements OnInit {

  // denna data ska hämtas från formuläret
  listOfTodos: TodoItem[] = JSON.parse(localStorage.getItem('listOfTodos')) || [];
  finishedTodos: TodoItem[] = [];

  constructor() { }

  ngOnInit(): void {
    console.log(this.listOfTodos);
  }

  storeItem() {
    localStorage.setItem('listOfTodos', JSON.stringify(this.listOfTodos));
  }

  addItem(e: TodoItem) {

    this.storeItem();
    console.log(e);
    this.listOfTodos.push(e);
    localStorage.setItem('listOfTodos', JSON.stringify(this.listOfTodos));
    return this.listOfTodos;
  }

  itemDone(done: TodoItem) {
    if(done.isDone === false) {
      let listPosition = this.listOfTodos.indexOf(done);
      this.listOfTodos.splice(listPosition, 1);
      this.finishedTodos.push(done);
      done.isDone = true;
    } else {
      let listPosition = this.finishedTodos.indexOf(done);
      this.finishedTodos.splice(listPosition, 1);
      this.listOfTodos.push(done);
      done.isDone = false;
    }
  }
  removeItem(removeItem: TodoItem) {
    let todo = this.listOfTodos.indexOf(removeItem);
    this.listOfTodos.splice(todo, 1);
    console.log(removeItem);
    // här behöver jag tömma local storage när man trycker på delete
  }
  sort() {
    this.listOfTodos.sort( (a, b) => {
      a.todo < b.todo
      return -1;
    });
  }


}
