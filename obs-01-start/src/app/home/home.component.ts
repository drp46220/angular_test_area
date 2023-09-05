import { Component, OnDestroy, OnInit } from '@angular/core';

import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private sub: Subscription;

  constructor() { }

  ngOnInit() {
    // real custom observable
    const customObsv = new Observable(obvs => {
      let count = 0;
      setInterval( () => {
        obvs.next(count);
        if (count === 2) { obvs.complete(); }
        if (count > 3) {
          obvs.error(new Error('count > 3'))
        }
        count++
      }, 1000);
    });
  }

  // prevetns memory leaks
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
