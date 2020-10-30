import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from './user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('formData') formData: NgForm;

  subscriptions = ['Basic', 'Advance', 'Pro'];
  defaultSubscription = 'Basic';
  submitted = false;

  user: User;

  onSubmit() {
    this.user = new User(
      this.formData.value.email,
      this.formData.value.subscription,
      this.formData.value.password
    );
    this.formData.reset();
    this.submitted = true;
  }

}
