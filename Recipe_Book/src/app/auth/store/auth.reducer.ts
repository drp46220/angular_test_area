import { User } from '../user.model';
import * as AuthAction from './auth.actions';

export interface State {
  user: User;
  authError: string;
  loading: boolean;
}

const initialState: State = {
  user: null,
  authError: null,
  loading: false,
};

export function authReducer(
  state = initialState,
  action: AuthAction.AuthActions
) {
  switch (action.type) {
    case AuthAction.LOGIN: // user = the new user that logged in
      const user = new User(
        action.payload.email,
        action.payload.userID,
        action.payload.token,
        action.payload.expirationDate
      );
      return {
        ...state,
        authError: null,
        // user: user, // first user is the 'initialState' and the second is the 'const' created in the 'case':
        user, //  this also works. but only if the payload and the initialState have the same name
        loading: false,
      };

    case AuthAction.LOGOUT: // just set user = null to logout
      return {
        ...state,
        user: null,
      };

    case AuthAction.LOGIN_START:
      return {
        ...state,
        authError: null,
        loading: true,
      };
    case AuthAction.LOGIN_FAIL:
      return {
        ...state,
        authError: action.payload,
        user: null,
        loading: false,
      };

    default:
      return state;
  }
}
