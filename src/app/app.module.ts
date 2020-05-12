import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrintListComponent } from './print-list/print-list.component';
import { DataListComponent } from './data-list/data-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PrintListComponent,
    DataListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
