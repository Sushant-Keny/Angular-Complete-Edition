import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  /* tslint:disable */
  @Output() render = new EventEmitter<string>();
  /* tslint:enable */
  constructor() { }

  ngOnInit(): void {
  }

  onSelect(sectionName: string) {
    this.render.emit(sectionName);
  }

}
