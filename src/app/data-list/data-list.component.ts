import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../models/TodoItem';

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.scss']
})
export class DataListComponent implements OnInit {

  // denna data ska hämtas från formuläret
  listOfTodos: TodoItem[] = [
    {todo: 'aaaaaa', when: new Date(), by: 'Me', isDone: false},
    {todo: 'ssssss', when: new Date(), by: 'you', isDone: false},
    {todo: 'ddddd', when: new Date(), by: 'Mssse', isDone: false},
    {todo: 'ppppp', when: new Date(), by: 'dddMe', isDone: false}
  ];

  // denna data ska uppdateras när man trycker på "färdig"
  // från början borde den vara en tom lista
  finishedTodos: TodoItem[] = [
    {todo: 'x', when: new Date(), by: 'Me', isDone: true},
    {todo: 'y', when: new Date(), by: 'Me', isDone: true},
    {todo: 'z', when: new Date(), by: 'Me', isDone: true}
  ];

  constructor() { }

  ngOnInit(): void {
  }
  // här tar vi emot datan,
  // för att ändra hur den visas
  itemDone(done: TodoItem) {
    if(done.isDone === false) {
      // ta reda på positionen
      let listPosition = this.listOfTodos.indexOf(done);
      // jag vill ta bort done från denna lista
      this.listOfTodos.splice(listPosition, 1);
      // jag vill flytta this.done till listan finishedTodos
      this.finishedTodos.push(done);
      // avsluta med att ändra värdet på isDone
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
  }



  sortAZ() {
    this.listOfTodos.sort( (a, b) => {
      a.todo < b.todo
      return -1;
    });
  }


}
