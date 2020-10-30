import { Component, OnInit } from '@angular/core';
import { UserService } from './users/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'observables-poc';
  activated = false;

  constructor(private readonly userService: UserService) {  }

  ngOnInit(): void {
    this.userService.activated.subscribe((activated) => {
      this.activated = activated;
    });
  }
}
