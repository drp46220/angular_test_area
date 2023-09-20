import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as AuthActions from '../store/auth.actions';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { DEFAULT_CURRENCY_CODE, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user.model';
import { AuthService } from '../auth.service';
import { ThisReceiver } from '@angular/compiler';

// authLogin = createEffect(() => this.actions$.pipe(...));

export interface AuthResponseData {
  // For SignUp and SignIn
  kind: string; //not shown in api docs for some reason
  idToken: string; // A Firebase Auth ID token for the newly created user.
  email: string; // The email for the newly created user.
  refreshToken: string; // A Firebase Auth refresh token for the newly created user.
  expiresIn: string; //The number of seconds in which the ID token expires.
  localId: string; // The user id of the newly created user.
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
  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private router: Router,
    private authService: AuthService
  ) {}

  authRedirect = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.AUTH_SUCCESS, AuthActions.LOGOUT),
        tap(() => {
          this.router.navigate(['/']);
        })
      ),
    { dispatch: false }
  );

  authSignUp = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.SIGNUP), // Sign Up type
        switchMap((authData: AuthActions.SignUp) => {
          // switchMap() returns new observable
          return this.http
            .post<AuthResponseData>(signupKey + apiKey, {
              email: authData.payload.email,
              password: authData.payload.pswrd,
              returnSecureToken: true,
            })
            .pipe(
              tap((resData) => {
                this.authService.autoLogout(+resData.expiresIn * 1000);
              }),
              map((resData) => {
                return this.authenticationHandler(
                  resData.email,
                  resData.localId,
                  resData.idToken,
                  +resData.expiresIn
                );
              }),
              catchError((errorRes) => {
                return this.errorHandle(errorRes);
              })
            );
        })
      ),
    { dispatch: false }
  );

  // signs up and logs in to FireBase
  // only continue in the observable chain if type = LOGIN_START
  authLogin = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.LOGIN),
        switchMap((authData: AuthActions.Login) => {
          return this.http
            .post<AuthResponseData>(signinKey + apiKey, {
              email: authData.payload.email,
              password: authData.payload.pswrd,
              returnSecureToken: true,
            })
            .pipe(
              tap((resData) => {
                this.authService.autoLogout(+resData.expiresIn * 1000);
              }),
              map((resData) => {
                return this.authenticationHandler(
                  resData.email,
                  resData.localId,
                  resData.idToken,
                  +resData.expiresIn
                );
              }),
              catchError((errorRes) => {
                return this.errorHandle(errorRes);
              })
            );
        })
      )
    // { dispatch: false } // must dispatch this to the reducer to update the loading state of the user
  );

  autoLogin = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.AUTO_LOGIN),
        map(() => {
          const userData: {
            // parse local storage
            email: string;
            id: string;
            _token: string;
            _tokenExpiration: Date;
          } = JSON.parse(localStorage.getItem('userData'));

          if (!userData) {
            return { type: 'DUMMY' };
          }

          // create new user based on local storage data
          const loadedUser = new User(
            userData.email,
            userData.id,
            userData._token,
            new Date(userData._tokenExpiration)
          );

          const duration = // otherwise do nothing
            new Date(userData._token).getTime() - new Date().getTime();

          // check if user token is valid
          if (loadedUser.token) {
            // if valid: authenticate new user
            this.authService.autoLogout(duration);
            return new AuthActions.AuthSuccess({
              email: loadedUser.email,
              userID: loadedUser.id,
              token: loadedUser.token,
              expirationDate: new Date(userData._tokenExpiration),
            });
          }
          return { type: 'DUMMY' };
        })
      ),
    { dispatch: false }
  );

  authLogout = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.LOGOUT),
        tap(() => {
          this.authService.clearLogoutTimer();
          localStorage.removeItem('userData');
        })
      ),
    { dispatch: false }
  );

  errorHandle = (errorRes: any) => {
    let errorMessage = 'Error has occurred';
    if (!errorRes.error || !errorRes.error.error) {
      return of(new AuthActions.AuthFail(errorMessage));
    }
    switch (errorRes.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage = 'Email already exists';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage = 'Email not found';
        break;
      case 'INVALID_PASSWORD':
        errorMessage = 'Invalid Password';
        break;
      default:
        errorMessage;
        break;
    }
    return of(new AuthActions.AuthFail(errorMessage));
  };

  authenticationHandler = (
    email: string,
    userID: string,
    token: string,
    expiresIn: number
  ) => {
    const date = new Date(new Date().getTime() + expiresIn * 1000);

    // make user to store
    const user = new User(email, userID, token, date);
    // store user in the browser's local storage
    localStorage.setItem('userData', JSON.stringify(user));

    return new AuthActions.AuthSuccess({
      email: email,
      userID: userID,
      token: token,
      expirationDate: date,
    });
  };
}
