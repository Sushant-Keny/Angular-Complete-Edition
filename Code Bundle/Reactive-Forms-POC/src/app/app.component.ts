import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  forbiddenNames = ['Nate', 'Nick'];
  genders = ['male', 'female', 'transgender'];
  signUpForm: FormGroup;

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      userData: new FormGroup({
        username: new FormControl(
          null,
          [
            Validators.required,
            this.isForbiddenName.bind(this)
          ]
        ),
        email: new FormControl(
          null,
          [
            Validators.required,
            Validators.email,
          ],
          this.isForbiddenEmail
        ),
      }),
      gender: new FormControl('male'),
      hobbies: new FormArray([])
    });
  }

  onSubmit() {
    console.log('Submitted');
    console.log(this.signUpForm);
  }

  onAddHobbies() {
    (this.signUpForm.get('hobbies') as FormArray).push(new FormControl(null, Validators.required));
  }

  getControls() {
    return (this.signUpForm.get('hobbies') as FormArray).controls;
  }

  isForbiddenName(control: FormControl): { [key: string]: boolean } {
    if (this.forbiddenNames.includes(control.value)) {
      return { forbiddenUsername: true };
    }
  }

  isForbiddenEmail(
    control: FormControl
  ): Promise<any> | Observable<any> {
    const promise = new Promise((resolve, reject) => {
      if (control.value === 'test@test.com') {
        resolve({ forbiddenEmail: true });
      }
    });
    return promise;
  }

}
