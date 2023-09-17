import { createAction } from '@ngrx/store';

// action created and stored as a function, thus it must be called as such
export const increment = createAction('[Counter] increment');

export const decrement = createAction('[Counter] decrement');
