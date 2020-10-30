import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  createServer = false;
  serverCreationStatus = 'Server is not created';
  serverName = 'Default Server';
  serverCreated = false;
  servers = ['EVisa', 'EVisa Mono'];

  constructor() {
    setTimeout(() => {
      this.createServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.servers.push(this.serverName);
    this.serverCreated = true;

    setTimeout(() => {
      this.serverCreated = false;
    }, 10000);

    // this.serverCreationStatus = `Server named ${this.serverName} is created successfully`;
  }

  // One way data binding + Event Binding
  // onUpdateServerName(event: Event) {
  //   this.serverName = (<HTMLInputElement>event.target).value;
  // }

}
