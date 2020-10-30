import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { ActiveUserComponent } from './users/active-user/active-user.component';
import { InactiveUserComponent } from './users/inactive-user/inactive-user.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    ActiveUserComponent,
    InactiveUserComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
