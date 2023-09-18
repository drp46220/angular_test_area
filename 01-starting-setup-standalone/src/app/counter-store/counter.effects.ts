import { Actions, createEffect, ofType } from '@ngrx/effects';
import { decrement, increment } from './counter.actions';
import { tap } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class CounterEffects {
  saveCount = createEffect(
    () =>
      this.actions$.pipe(
        ofType(increment, decrement),
        tap((action) => {
          console.log(action); // log to console
          localStorage.setItem('count', action.value.toString()); // save in local storage
        })
      ),
    { dispatch: false } // does not dispatch a new object when done
    // default is true
  );

  constructor(private actions$: Actions) {} // actions returns an observable
}
