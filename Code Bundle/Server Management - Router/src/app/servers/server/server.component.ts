import { Component, OnInit } from '@angular/core';
import { ServersService } from '../servers.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: { id: number, name: string, status: string };
  paramsSubscription: Subscription;
  dataSubscription: Subscription;

  constructor(
    private serversService: ServersService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    // let id = +this?.route?.snapshot?.params?.id;

    // if (id) {
    //   this.server = this.serversService.getServer(id);
    // }

    // this.paramsSubscription = this.route.params.subscribe((params) => {
    //   id = +params.id;
    //   this.server = this.serversService.getServer(id);
    // });
    this.server = this.route.snapshot.data['server'];

    this.dataSubscription = this.route.data.subscribe(
      (data) => {
        this.server = data['server'];
      }
    );
  }

  onEdit() {
    // this.router.navigate(['edit'], {
    //   relativeTo: this.route,
    //   queryParams: { allowEdit: this.server.id === 1 ? 1 : 0 },
    //   fragment: 'loading'
    // });
    this.router.navigate(['edit'], {
      relativeTo: this.route,
      queryParamsHandling: 'preserve',
    });
  }

}
