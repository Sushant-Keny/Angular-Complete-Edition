import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TaskService } from '../../../_shared/services/task.service';
import { Subscription } from 'rxjs';
import { Task } from '../../../_shared/models/task.model';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {
  paramsSubscription: Subscription;
  task: Task;

  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly taskService: TaskService
  ) { }

  ngOnInit(): void {
    this.paramsSubscription = this.route.params.subscribe((params) => {
      const taskId = params['id'];
      this.task = this.taskService.getTaskById(Number(taskId));
    });
  }

  onEdit() {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }

}
