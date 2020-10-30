import { Component, OnInit, Input } from '@angular/core';

import { Experience } from '../../_shared/models/experience.model';

@Component({
  selector: 'app-gallery-item',
  templateUrl: './gallery-item.component.html',
  styleUrls: ['./gallery-item.component.css']
})
export class GalleryItemComponent implements OnInit {
  @Input() experience: Experience;

  constructor() { }

  ngOnInit(): void {

  }

}
