import { Component, OnInit } from '@angular/core';
import { Task } from '../../../_shared/models/task.model';
import { TaskService } from '../../../_shared/services/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: Task[];

  constructor(private readonly taskService: TaskService) { }

  ngOnInit(): void {
    this.tasks = this.taskService.tasks;
  }

}
