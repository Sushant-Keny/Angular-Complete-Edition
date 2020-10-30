import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../_shared/services/authentication.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName = '';
  password = '';
  invalidCredentials = false;

  constructor(
    private readonly authenticationService: AuthenticationService,
    private readonly router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    const authentic = this.authenticationService.login(this.userName, this.password);
    if (!authentic) {
      this.invalidCredentials = true;
    } else {
      this.router.navigate(['/tasks']);
    }
  }

}
