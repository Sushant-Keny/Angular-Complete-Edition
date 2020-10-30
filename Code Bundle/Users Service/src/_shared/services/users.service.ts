import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { EStatus } from '../enums/status.enum';
import { CounterService } from './counter.service';

@Injectable({ providedIn: 'root' })
export class UsersService {
  users: User[] = [
    new User(1, 'Cowboy', 'Cerrone', EStatus.ACTIVE),
    new User(2, 'Nate', 'Diaz', EStatus.INACTIVE),
    new User(3, 'Khabib', 'Nurmagomedev', EStatus.ACTIVE),
    new User(4, 'Tony', 'Ferguson', EStatus.ACTIVE)
  ];

  constructor(private readonly counterService: CounterService) {  }

  getActiveUsers(): User[] {
    return this.users.filter(user => user.status === EStatus.ACTIVE);
  }

  getInActiveUsers(): User[] {
    return this.users.filter(user => user.status === EStatus.INACTIVE);
  }

  getUserById(id: number): User {
    return this.users.find(user => user.id === id);
  }

  activateUser(id: number): User {
    const user = this.getUserById(id);
    user.status = EStatus.ACTIVE;
    this.counterService.incrementActiveUsers();
    return user;
  }

  deActivateUser(id: number): User {
    const user = this.getUserById(id);
    user.status = EStatus.INACTIVE;
    this.counterService.decrementActiveUsers();
    return user;
  }
}
