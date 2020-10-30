import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('data') data: NgForm;
  defaultQuestion = 'pet';
  answer = '';
  genders = ['Male', 'Female', 'Transgender'];
  submitted = false;
  user = {
    username: '',
    email: '',
    secret: '',
    answer: '',
    gender: '',
  };

  onSuggestUsername() {
    const suggestedUsername = 'Superuser';
    // this.data.setValue({
    //   userData: {
    //     username: suggestedUsername,
    //     email: ''
    //   },
    //   secret: '',
    //   answer: '',
    //   gender: ''
    // });

    this.data.form.patchValue({
      userData: {
        username: suggestedUsername
      }
    });
  }

  // onSubmit(data: NgForm) {
  //   console.log('Submitted!', data);
  // }

  onSubmit() {
    this.user.username = this.data.value.userData.username;
    this.user.email = this.data.value.userData.email;
    this.user.secret = this.data.value.secret;
    this.user.answer = this.data.value.answer;
    this.user.gender = this.data.value.gender;
    this.submitted = true;
    this.data.reset();
  }

}
