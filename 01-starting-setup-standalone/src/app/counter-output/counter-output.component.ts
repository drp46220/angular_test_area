import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AsyncPipe } from '@angular/common';
import { doubleCount, selectCount } from '../counter-store/counter.selector';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css'],
  standalone: true,
  imports: [AsyncPipe],
})
export class CounterOutputComponent {
  //<name>$ : Observable< <type> >;
  // naming convention for observables
  count$: Observable<number>; // needs to be initialized in the constructor
  double$: Observable<number>;

  //                                lets the store know the counter will return a number
  constructor(private store: Store<{ counter: number }>) {
    // .select allows you to select data from the store
    //  .select returns an observable
    this.count$ = store.select(selectCount);
    this.double$ = store.select(doubleCount);
  }
}
