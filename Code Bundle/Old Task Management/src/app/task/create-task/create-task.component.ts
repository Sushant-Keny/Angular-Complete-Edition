import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {
  title = '';
  description = '';
  status = '';
  counter = 5;

  /* tslint:disable */
  @Output() taskCreated = new EventEmitter<{
    id: number,
    title: string,
    description: string,
    status: string,
  }>();

  constructor() { }

  ngOnInit(): void {
  }

  onCreateTask() {
    this.taskCreated.emit({
      id: this.counter++,
      title: this.title,
      description: this.description,
      status: this.status,
    });
  }

}
