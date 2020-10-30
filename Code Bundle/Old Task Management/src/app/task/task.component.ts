import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  taskList: {
    id: number,
    title: string,
    description: string,
    status: string,
  }[] = [
    { id: 1, title: 'Learn Angular', description: 'Important Priority', status: 'In-Progress' },
    { id: 2, title: 'Plan Goals', description: 'Do it on weekend', status: 'New' },
    { id: 3, title: 'Make Journal', description: 'Weekend Priority', status: 'New' },
    { id: 4, title: 'Learning Nest.js', description: 'Best Framework for Node.js', status: 'Completed' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onTaskCreated(task: { id: number, title: string, description: string, status: string }) {
    this.taskList.push({
      id: task.id,
      title: task.title,
      description: task.description,
      status: task.status
    });
  }

}
