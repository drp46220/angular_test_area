import { User } from '../user.model';

export interface State {
  user: User;
}

const initialState: State = {
  user: null,
};

export function authReducer(state = initialState, action) {
  return state;
  //   switch (type) {

  //   case first:
  //     return { ...state, ...payload }

  //   default:
  //     return state
  //   }
}
