import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoadingSpinnerService } from '../_shared/services/loading-spinner.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.css']
})
export class LoadingSpinnerComponent implements OnInit, OnDestroy {
  show = false;
  loadingSubscription: Subscription;

  constructor(private readonly loadingSpinnerService: LoadingSpinnerService) { }

  ngOnDestroy(): void {
    this.loadingSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.loadingSubscription = this.loadingSpinnerService.load.subscribe(({ loading }) => {
      this.show = loading;
    });
  }

}
