import { createReducer, on } from '@ngrx/store';
import { decrement, increment } from './counter.actions';

const initialState = 0;

// // not available for use in older versions of Angular
export const counterReducer = createReducer(
  initialState,
  on(increment, (state) => state + 1), // listen to an action and define what happens on when the action is called
  on(decrement, (state) => state - 1)
);
// // add this to the global store in the main.ts file in a stand alone project.
// // example:
// //         providers: [provideStore({ <reducer_name>: <your_reducer> })]

// // older version
// export function counterReducer(state = initialState) {
//   return state;
// }
