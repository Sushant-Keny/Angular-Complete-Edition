import { Injectable } from '@angular/core';

import { Task } from '../models/task.model';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasks: Task[] = [];

  constructor(private readonly authenticationService: AuthenticationService) {
    const activeUser = this.authenticationService.activeUser;
    if (activeUser) {
      this.tasks = activeUser.tasks;
    }
  }

  getTaskById(id: number): Task {
    const task: Task = this.tasks.find(e => e.id === id);
    return { ...task };
  }

  updateTaskById(id: number, updatedTask: Task) {
    const task = this.tasks.find(e => e.id === id);
    task.name = updatedTask.name;
    task.status = updatedTask.status;
    task.description = updatedTask.description;
  }
}
