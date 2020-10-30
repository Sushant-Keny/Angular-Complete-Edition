import { Component } from '@angular/core';
import { Experience } from './_shared/models/experience.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  onExperiencesInitiation(experiences: Experience[]) {
    console.log(experiences);
  }
}
