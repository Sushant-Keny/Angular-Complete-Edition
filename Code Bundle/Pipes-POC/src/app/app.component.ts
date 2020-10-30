import { Component } from '@angular/core';

import { Server } from './_shared/models/server.model';
import { EServerStatus } from './_shared/enums/server-status.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public servers: Server[] = [
    new Server(
      'medium',
      'Production Server',
      EServerStatus.STABLE,
      new Date(15, 1, 2017)
    ),
    new Server(
      'large',
      'User Database',
      EServerStatus.STABLE,
      new Date(15, 1, 2017)
    ),
    new Server(
      'small',
      'Development Server',
      EServerStatus.OFFLINE,
      new Date(15, 1, 2017)
    ),
    new Server(
      'small',
      'Testing Environment Server',
      EServerStatus.STABLE,
      new Date(15, 1, 2017)
    )
  ];

  public appStatus: Promise<EServerStatus> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(EServerStatus.STABLE);
    }, 2000);
  });

  public searchText: string;
  public sortKey: string;

  public getStatusClasses(server: Server) {
    return {
      'list-group-item-success': server.status === EServerStatus.STABLE,
      'list-group-item-warning': server.status === EServerStatus.OFFLINE,
      'list-group-item-danger': server.status === EServerStatus.CRITICAL
    };
  }

  public onNewServer() {
    this.servers.push(new Server(
      'small',
      'New Server',
      EServerStatus.STABLE,
      new Date(15, 1, 2017)
    ));
  }

  public sortBy(key: string) {
    this.sortKey = key;
  }
}
