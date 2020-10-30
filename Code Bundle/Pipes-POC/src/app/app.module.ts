import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ShortenPipe } from './_shared/pipes/shorten.pipe';
import { FilterPipe } from './_shared/pipes/filter.pipe';
import { ReversePipe } from './_shared/pipes/reverse.pipe';
import { SortPipe } from './_shared/pipes/sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ShortenPipe,
    FilterPipe,
    ReversePipe,
    SortPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
