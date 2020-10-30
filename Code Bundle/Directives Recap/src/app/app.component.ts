import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  evenNumbers = [2, 4, 6, 8, 10];
  oddNumbers = [1, 3, 5, 7, 9];
  even = true;
  value = 5;
}
