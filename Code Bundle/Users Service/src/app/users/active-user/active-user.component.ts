import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../../_shared/models/user.model';
import { UsersService } from '../../../_shared/services/users.service';

@Component({
  selector: 'app-active-user',
  templateUrl: './active-user.component.html',
  styleUrls: ['./active-user.component.css']
})
export class ActiveUserComponent implements OnInit {
  @Input() user: User;

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
  }

  activateUser() {
    this.usersService.activateUser(this.user.id);
  }

  deActivateUser() {
    this.usersService.deActivateUser(this.user.id);
  }

}
