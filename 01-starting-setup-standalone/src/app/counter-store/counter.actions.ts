import { createAction, props } from '@ngrx/store';

export const init = createAction('[Counter] Init');

export const set = createAction('[Counter] Set', props<{ value: number }>());

// action created and stored as a function, thus it must be called as such
export const increment = createAction(
  '[Counter] increment',
  props<{ value: number }>()
);

export const decrement = createAction(
  '[Counter] decrement',
  props<{ value: number }>()
);
