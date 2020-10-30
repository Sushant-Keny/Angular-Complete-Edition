import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  @Input() message: string;
  // tslint:disable
  @Output() close = new Subject<void>();
  // tsling:enable

  constructor() { }

  ngOnInit(): void {
  }

  onClose() {
    this.close.next();
  }

}
