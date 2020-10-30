import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent {
  serverId = 1;
  serverStatus = 'running';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'running' : 'stopped';
  }

  getServerStatus() {
    return this.serverStatus;
  }

  getSeverStatusColor() {
    return this.serverStatus === 'running' ? 'chartreuse' : 'crimson';
  }
}
