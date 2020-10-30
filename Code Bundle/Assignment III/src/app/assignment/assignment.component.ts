import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {
  displayParagraph = true;
  counter = 0;
  logs = [];

  constructor() { }

  ngOnInit(): void {
  }

  onToggleDisplay() {
    this.displayParagraph = !this.displayParagraph;
    this.logs.push({
      counter: this.counter,
      timestamp: new Date(),
    });
    this.counter += 1;
  }

  getLogColor() {
    return this.logs.length > 4 ? '#0062cc' : 'black';
  }

}
