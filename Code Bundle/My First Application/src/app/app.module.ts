import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PrimaryAlertComponent } from './primary-alert/primary-alert.component';
import { SecondaryAlertComponent } from './secondary-alert/secondary-alert.component';

@NgModule({
  declarations: [
    AppComponent,
    JumbotronComponent,
    NavbarComponent,
    PrimaryAlertComponent,
    SecondaryAlertComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
