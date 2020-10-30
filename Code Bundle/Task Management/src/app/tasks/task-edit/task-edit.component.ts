import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../../../_shared/services/task.service';
import { ETaskStatus } from '../../../_shared/enums/task-status.enum';
import { Subscription } from 'rxjs';
import { Task } from '../../../_shared/models/task.model';
import { ICanComponentDeactivate } from '../../../_shared/guards/can-component-deactivate.guard';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css']
})
export class TaskEditComponent implements OnInit, ICanComponentDeactivate {
  changesSaved = false;
  blueprint: string;
  task: Task;
  paramsSubscription: Subscription;
  validStatus: ETaskStatus[] = [ETaskStatus.NEW, ETaskStatus.IN_PROGRESS, ETaskStatus.COMPLETED];

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly taskService: TaskService
  ) { }

  ngOnInit(): void {
    this.paramsSubscription = this.route.params.subscribe((params) => {
      const id = params['id'];
      this.task = this.taskService.getTaskById(Number(id));
      this.blueprint = JSON.stringify(this.task);
    });
  }

  onEdit() {
    this.taskService.updateTaskById(this.task.id, { ...this.task });
    this.changesSaved = true;
    this.router.navigate(['..'], { relativeTo: this.route });
  }

  canDeactivate() {
    if (this.blueprint === JSON.stringify(this.task)) {
      return true;
    }

    if (!this.changesSaved) {
      return confirm('Changes are not saved. Do you want to continue?');
    }

    return true;
  }

}
