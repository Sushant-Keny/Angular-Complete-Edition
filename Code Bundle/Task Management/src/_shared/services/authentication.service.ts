import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  loggedIn = false;
  activeUser: User;

  constructor(private readonly userService: UserService) {}

  login(
    userName: string,
    password: string,
  ): boolean {
    const user = this.userService.isAuthentic(userName, password);
    if (user) {
      this.loggedIn = true;
      this.activeUser = user;
      return true;
    } else {
      return false;
    }
  }

  logout() {
    this.loggedIn = false;
  }

  isAuthentic(): boolean {
    return this.loggedIn;
  }

}
