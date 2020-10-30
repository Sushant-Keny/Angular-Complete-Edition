import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CounterService {
  activeUsers = 3;
  inActiveUsers = 1;

  incrementActiveUsers() {
    this.activeUsers += 1;
    this.inActiveUsers -= 1;
  }

  decrementActiveUsers() {
    this.activeUsers -= 1;
    this.inActiveUsers += 1;
  }
}
