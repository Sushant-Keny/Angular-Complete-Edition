import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Experience } from '../_shared/models/experience.model';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  @Output() experiencesInitiated = new EventEmitter<Experience[]>();

  experiences: Experience[] = [
    new Experience(
      'Trekking',
      'https://i.picsum.photos/id/1/1200/800.jpg',
      'Trekking gives you a sense of physical well-being. It is a sport for your body, mind and spirit. It all started in 2008 when we went out on a team outing on a trek to Tadiyandamol in Coorg, Karnataka.',
      2
    ),
    new Experience(
      'Wild-life Safari',
      'https://i.picsum.photos/id/11/1200/800.jpg',
      'Situated on the Western Ghats, enriched by the niche of the sea life, residing in the Arabian Sea and bordered by the abundant forests and hills, Mumbai is more than a commercial pivot and can be viewed through the lens of Wildlife as well.',
      5
    ),
    new Experience(
      'Mountain Cycling',
      'https://i.picsum.photos/id/21/1200/800.jpg',
      'Mountain biking is a sport of riding bicycles off-road, often over rough terrain, using specially designed mountain bikes. Mountain bikes share similarities with ...',
      1
    ),
    new Experience(
      'Trekking',
      'https://i.picsum.photos/id/31/1200/800.jpg',
      'Trekking gives you a sense of physical well-being. It is a sport for your body, mind and spirit. It all started in 2008 when we went out on a team outing on a trek to Tadiyandamol in Coorg, Karnataka.',
      2
    ),
    new Experience(
      'Wild-life Safari',
      'https://i.picsum.photos/id/41/1200/800.jpg',
      'Situated on the Western Ghats, enriched by the niche of the sea life, residing in the Arabian Sea and bordered by the abundant forests and hills, Mumbai is more than a commercial pivot and can be viewed through the lens of Wildlife as well.',
      5
    ),
    new Experience(
      'Mountain Cycling',
      'https://i.picsum.photos/id/51/1200/800.jpg',
      'Mountain biking is a sport of riding bicycles off-road, often over rough terrain, using specially designed mountain bikes. Mountain bikes share similarities with ...',
      1
    )
  ];

  constructor() { }

  ngOnInit(): void {
    this.experiencesInitiated.emit(this.experiences);
  }

}
