import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrintListComponent } from './components/print-list/print-list.component';
import { DataListComponent } from './components/data-list/data-list.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { DoneTodoComponent } from './components/done-todo/done-todo.component';
import { SortListComponent } from './components/sort-list/sort-list.component';
import { ShowFormDirective } from './directives/showForm/show-form.directive';
import { FlashDirective } from './directives/changeHeadline/flash.directive';

@NgModule({
  declarations: [
    AppComponent,
    PrintListComponent,
    DataListComponent,
    AddTodoComponent,
    DoneTodoComponent,
    SortListComponent,
    ShowFormDirective,
    FlashDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
