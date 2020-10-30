import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, interval, Observable, Subscriber } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  subscription: Subscription;

  constructor() { }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    // this.subscription = interval(1000).subscribe((i) => {
    //   console.log(i);
    // });

    const intervalObservable = new Observable((subscriber: Subscriber<number>) => {
      let i = 0;
      setInterval(() => {
        // Complete Observable
        // if (i === 2) {
        //   subscriber.complete();
        // }

        // Throw error
        // if (i > 3) {
        //   subscriber.error(new Error('Value is excedding 3'));
        // }
        subscriber.next(++i);
      }, 1000);
    });

    // Use operators to transform the data streamed by the observables
    this.subscription = intervalObservable
      .pipe(
        filter((data: number) => {
          return data % 2 === 0;
        }),
        map((data) => {
          return `Round: ${data}`;
        })
      ).subscribe(
        (data) => {
          console.log(data);
        },
        (error) => {
          console.log(error);
        },
        () => {
          console.log('Observable completed');
        }
      );

    // Subscribing Observable without usage of operators
    // this.subscription = intervalObservable.subscribe(
    //   (data) => {
    //     console.log(data);
    //   },
    //   (error) => {
    //     console.log(error);
    //   },
    //   () => {
    //     console.log('Observable completed');
    //   }
    // );
  }

}
