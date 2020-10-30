import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Task } from '../models/task.model';
import { ETaskStatus } from '../enums/task-status.enum';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[] = [
    new User(1, 'Nate', 'Diaz', 'Nate', 'Nate', []),
    new User(1, 'Khabib', 'Nurmagomedov', 'Khabib', 'Khabib', []),
    new User(1, 'Dana', 'White', 'Dana', 'Dana', []),
    new User(1, 'Alexa', 'Bliss', 'Alexa', 'Alexa', [])
  ];

  constructor() {
    const i = this.users.findIndex(e => e.id === 1);
    this.users[i].tasks = [
      new Task(
        1,
        'Workout',
        'When done right and with appropriate intensity, a 10 minute workout can be an incredibly effective way to work up a sweat, get your heart pumping, and get your muscles working. Plus: When you compare 10 minutes of working out to zero minutes of working out, 10 minutes is almost always better!',
        ETaskStatus.NEW
      ),
      new Task(
        2,
        'Hiking',
        'Hiking is a long, vigorous walk, usually on trails or footpaths in the countryside. "Hiking" is the preferred term in Canada and the United States; the term "walking" is used in these regions for shorter, particularly urban walks.',
        ETaskStatus.NEW
      )
    ];
  }

  isAuthentic(
    userName: string,
    password: string
  ) {
    const user: User = this.users.find((e) => {
      return e.userName === userName && e.password === password;
    });

    return user;
  }
}
