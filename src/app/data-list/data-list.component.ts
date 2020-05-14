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
    {todo: 'hejhgehj', when: new Date(), by: 'Me'},
    {todo: 'hejdddd', when: new Date(), by: 'you'},
    {todo: 'hejhddj', when: new Date(), by: 'Mssse'},
    {todo: 'hejssssj', when: new Date(), by: 'dddMe'}
  ];

  // denna data ska uppdateras när man trycker på "färdig"
  // från början borde den vara en tom lista
  finishedTodos: TodoItem[] = [
    {todo: 'x', when: new Date(), by: 'Me'},
    {todo: 'y', when: new Date(), by: 'Me'},
    {todo: 'z', when: new Date(), by: 'Me'}
  ];

  constructor() { }

  ngOnInit(): void {
  }
  // här tar vi emot datan,
  // för att ändra hur den visas
  itemDone(done: TodoItem) {
    console.log(done);
    console.log(this.finishedTodos);

    // ta reda på positionen
    let listPosition = this.listOfTodos.indexOf(done);

    // //jag vill ta bort done från denna lista
    this.listOfTodos.splice(listPosition, 1);

    // jag vill flytta this.done till listan finishedTodos
    this.finishedTodos.push(done);


  }


}
