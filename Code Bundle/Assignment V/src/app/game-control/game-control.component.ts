import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  intervalId;
  counter = [];

  constructor() { }

  ngOnInit(): void {
  }

  onStart() {
    let i = 1;
    this.intervalId = setInterval(() => {
      this.counter.push(i++);
    }, 1000);
  }

  onStop() {
    clearInterval(this.intervalId);
    this.intervalId = null;

    setTimeout(() => {
      this.counter = [];
    }, 1000);
  }

}
