import { Component, OnInit } from '@angular/core';
import { ServersService } from '../servers.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { ICanComponentDeactivate } from './can-deactivate-guard.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css'],
})
export class EditServerComponent implements OnInit, ICanComponentDeactivate {
  server: { id: number, name: string, status: string };
  serverName;
  serverStatus;
  allowEdit = false;
  queryParamSubscription: Subscription;
  changesSaved = false;

  constructor(
    private serversService: ServersService,
    private readonly route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const { id } = this.route.snapshot.params;
    const { fragment } = this.route.snapshot;

    this.server = this.serversService.getServer(+id);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;

    this.queryParamSubscription = this.route.queryParams.subscribe((queryParams) => {
      this.allowEdit = queryParams['allowEdit'] === '1' ? true : false;
    });
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, { name: this.serverName, status: this.serverStatus });
    this.changesSaved = true;
  }

  canDeactivate(): boolean | Observable<boolean> | Promise<boolean> {
    if (!this.allowEdit) {
      return true;
    }

    if (!this.changesSaved) {
      // If user clicks on ok then confirm will return true else false
      return confirm('Do you want to discard the changes?');
    } else {
      return true;
    }
  }

}
