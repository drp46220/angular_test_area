import { Action } from '@ngrx/store';

export const LOGIN = '[Auth] LOGIN';

export const AUTH_SUCCESS = '[Auth] AUTH_SUCCESS';
export const AUTH_FAIL = '[Auth] AUTH_FAIL';

export const AUTO_LOGIN = '[Auth] AUTO_LOGIN';

export const SIGNUP = '[Auth] SIGNUP';

export const LOGOUT = '[Auth] LOGOUT';

export const CLEAR_ERROR = '[Auth] CLEAR_ERROR';

export class Login implements Action {
  readonly type = LOGIN;

  constructor(
    public payload: {
      email: string;
      pswrd: string;
    }
  ) {}
}

export class AuthSuccess implements Action {
  readonly type = AUTH_SUCCESS;

  constructor(
    public payload: {
      email: string;
      userID: string;
      token: string;
      expirationDate: Date;
    }
  ) {}
}

export class AuthFail implements Action {
  readonly type = AUTH_FAIL;

  constructor(public payload: string) {}
}

export class AutoLogin implements Action {
  readonly type = AUTO_LOGIN;
}

export class SignUp implements Action {
  readonly type = SIGNUP;

  constructor(
    public payload: {
      email: string;
      pswrd: string;
    }
  ) {}
}

export class Logout implements Action {
  readonly type = LOGOUT;
}

export class ClearError implements Action {
  readonly type = CLEAR_ERROR;
}

export type AuthActions =
  | Login
  | AuthSuccess
  | AuthFail
  | AutoLogin
  | Logout
  | SignUp
  | ClearError;
