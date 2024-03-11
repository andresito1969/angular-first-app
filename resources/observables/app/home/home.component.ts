import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { Observable } from 'rxjs-compat';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private firstObsSubscription: Subscription;

  constructor() { }

  ngOnInit() {
    // console.log(this.firstObsSubscription);
    // this.firstObsSubscription = interval(1000).subscribe(count => {
    //   console.log(count);
    // })

    const customIntervalObservable = Observable.create(observer => {
      let compt = 0;
      setInterval(() => {
        observer.next(compt);
        if(compt == 2) observer.complete() // also done
        if(compt > 3) {
          observer.error(new Error('Count is gt than 3')) // error throw = auutomatic unsubscribe
        }
        compt++;
      }, 1000)
    })

    this.firstObsSubscription = customIntervalObservable.subscribe(data => {
      console.log(data);
    }, error => {
      console.log(error)
    }, () => {
      console.log('completed func')
    })
  }

  ngOnDestroy() {
    this.firstObsSubscription.unsubscribe();
  }
}
