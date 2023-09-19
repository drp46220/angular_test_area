import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as AuthActions from '../store/auth.actions';
import { catchError, map, of, switchMap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// authLogin = createEffect(() => this.actions$.pipe(...));

export interface AuthResponseData {
  // For SignUp and SignIn
  kind: string; //not shown in api docs for some reason
  idToken: string; // A Firebase Auth ID token for the newly created user.
  email: string; // The email for the newly created user.
  refreshToken: string; // A Firebase Auth refresh token for the newly created user.
  expiresIn: string; //The number of seconds in which the ID token expires.
  localId: string; // The uid of the newly created user.
  // for SignIn only
  registered?: boolean; // Whether the email is for an existing account.
}

const signupKey =
  'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=';
const signinKey =
  'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=';

const apiKey = 'AIzaSyBNUvsG5N7mhCGLn5iJOla5J4mHUHsUJfA';

@Injectable()
// wont be changing states here. only ikn reducers
export class AuthEffects {
  constructor(private actions$: Actions, private http: HttpClient) {}

  // signs up and logs in to FireBase
  // only continue in the observable chain if type = LOGIN_START
  authLogin = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.LOGIN_START),
        switchMap((authData: AuthActions.LoginStart) => {
          return this.http
            .post<AuthResponseData>(signinKey + apiKey, {
              email: authData.payload.email,
              password: authData.payload.pswrd,
              returnSecureToken: true,
            })
            .pipe(
              map((resData) => {
                const date = new Date(
                  new Date().getTime() + +resData.expiresIn * 1000
                );
                return of(
                  new AuthActions.Login({
                    email: resData.email,
                    userID: resData.idToken,
                    token: resData.idToken,
                    expirationDate: date,
                  })
                );
              }),
              catchError((error) => {
                return of();
              })
            );
        })
      ),
    { dispatch: false }
  );
}
