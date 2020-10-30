import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  status = ['Stable', 'Critical', 'Finished'];
  newProjectForm: FormGroup;

  ngOnInit(): void {
    this.newProjectForm = new FormGroup({
      name: new FormControl(null, [Validators.required, this.isForbiddenName]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      status: new FormControl('Stable'),
    });
  }

  isForbiddenName(control: FormControl): { [key: string]: boolean } {
    const forbiddenNames = ['Test'];

    if (forbiddenNames.includes(control.value)) {
      return { forbiddenName: true };
    }
  }

}
