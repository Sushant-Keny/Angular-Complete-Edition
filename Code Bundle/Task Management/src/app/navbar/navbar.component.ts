import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../_shared/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private readonly authenticationService: AuthenticationService,
    private readonly router: Router
  ) { }

  ngOnInit(): void {
  }

  onLogout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

}
