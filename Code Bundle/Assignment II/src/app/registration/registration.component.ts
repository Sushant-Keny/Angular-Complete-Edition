import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  userName = '';
  // disableReset = true;

  countries = ['India', 'Australia', 'USA', 'UK', 'Japan', 'Russia'];

  constructor() { }

  ngOnInit(): void {
  }

  // onUserNameInput() {
  //   if (this.userName) {
  //     this.disableReset = false;
  //   }
  // }

  onReset() {
    this.userName = '';
    // this.disableReset = true;
  }

}
