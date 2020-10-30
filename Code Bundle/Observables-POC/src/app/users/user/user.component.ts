import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  id: string;
  subscription: Subscription;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly userService: UserService,
  ) { }

  ngOnInit(): void {
    this.subscription = this.route.params.subscribe((params) => {
      this.id = params.id;
    });
  }

  onActivate() {
    this.userService.activated.next(true);
  }

}
