import { Component, OnInit, OnChanges, DoCheck } from '@angular/core';
import { UsersService } from '../../_shared/services/users.service';
import { User } from '../../_shared/models/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, DoCheck {
  activeUsers: User[];
  inActiveUsers: User[];

  constructor(private readonly usersService: UsersService) {}

  ngOnInit(): void {
    this.activeUsers = this.usersService.getActiveUsers();
    this.inActiveUsers = this.usersService.getInActiveUsers();
  }

  ngDoCheck(): void {
    this.activeUsers = this.usersService.getActiveUsers();
    this.inActiveUsers = this.usersService.getInActiveUsers();
  }

}
