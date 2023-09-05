import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private sub: Subscription;

  constructor() { }


  ngOnInit() {
    // build user defined observablesç
    this.sub = interval(1000).subscribe(count => {
      console.log(count + "seconds");
    });
  }

  // prevetns memory leaks
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
