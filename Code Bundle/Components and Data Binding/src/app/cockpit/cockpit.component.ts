import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
   /* tslint:disable */
  @Output() onServerAdded = new EventEmitter<{ name: string, content: string }>();
  @Output() onBlueprintAdded = new EventEmitter<{ name: string, content: string }>();
  /* tslint:enable */

  newServerName = '';
  newServerContent = '';

  @ViewChild('serverName', { static: true }) serverName: ElementRef;
  @ViewChild('serverContent', { static: true }) serverContent: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  // Two-way binding
  // onAddServer() {
  //   this.onServerAdded.emit({
  //     name: this.newServerName,
  //     content: this.newServerContent,
  //   });
  // }

  // Passing Local References
  // onAddServer(serverName: HTMLInputElement, serverContent: HTMLInputElement) {
  //   this.onServerAdded.emit({
  //     name: serverName.value,
  //     content: serverContent.value,
  //   });
  // }

  // Local References with @ViewChild
  onAddServer() {
    this.onServerAdded.emit({
      name: this.serverName.nativeElement.value,
      content: this.serverContent.nativeElement.value,
    });
  }

  // Two-way binding
  // onAddBlueprint() {
  //   this.onBlueprintAdded.emit({
  //     name: this.newServerName,
  //     content: this.newServerContent,
  //   });
  // }

  // Passing Local References
  // onAddBlueprint(serverName: HTMLInputElement, serverContent: HTMLInputElement) {
  //   this.onBlueprintAdded.emit({
  //     name: serverName.value,
  //     content: serverContent.value,
  //   });
  // }

  // Local References with @ViewChild
  onAddBlueprint() {
    this.onBlueprintAdded.emit({
      name: this.serverName.nativeElement.value,
      content: this.serverContent.nativeElement.value,
    });
  }
}
