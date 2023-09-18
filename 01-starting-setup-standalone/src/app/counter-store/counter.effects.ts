import { Actions, createEffect, ofType } from '@ngrx/effects';
import { decrement, increment } from './counter.actions';
import { tap, withLatestFrom } from 'rxjs';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCount } from './counter.selector';

@Injectable()
export class CounterEffects {
  saveCount = createEffect(
    () =>
      this.actions$.pipe(
        ofType(increment, decrement),
        withLatestFrom(this.store.select(selectCount)), // gets latest value from selector
        // withLatestFrom must come after ofType()
        tap(([action, counter]) => {
          console.log(action); // log to console
          localStorage.setItem('count', counter.toString()); // save latest value in local storage
        })
      ),
    { dispatch: false } // does not dispatch a new object when done
    // default is true
  );

  constructor(
    private actions$: Actions,
    private store: Store<{ counter: number }>
  ) {} // actions returns an observable
}
