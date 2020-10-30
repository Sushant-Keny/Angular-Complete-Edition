import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { CreateTaskComponent } from './task/create-task/create-task.component';
import { HeaderComponent } from './header/header.component';
import { TaskListComponent } from './task/task-list/task-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    CreateTaskComponent,
    HeaderComponent,
    TaskListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
