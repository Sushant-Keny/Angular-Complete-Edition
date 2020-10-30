import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  @Input() tasks: {
    id: number,
    title: string,
    description: string,
    status: string,
  };

  constructor() { }

  ngOnInit(): void {
  }

}
