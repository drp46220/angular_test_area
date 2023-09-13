import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, catchError, tap, throwError } from 'rxjs';
import { User } from './user.model';
import { Router } from '@angular/router';

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

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // signs up and logs in to FireBase
  signupKey = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=';
  signinKey =
    'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=';

  apiKey = 'AIzaSyBNUvsG5N7mhCGLn5iJOla5J4mHUHsUJfA';

  user = new BehaviorSubject<User>(null);

  signUp(email: string, pswrd: string) {
    return this.http
      .post<AuthResponseData>(this.signupKey + this.apiKey, {
        email: email,
        password: pswrd,
        returnSecureToken: true,
      })
      .pipe(
        catchError(this.errorHandle),
        tap((responseData) => {
          this.authHandle(
            responseData.email,
            responseData.localId,
            responseData.idToken,
            +responseData.expiresIn
          );
        })
      );
  }

  login(email: string, pswrd: string) {
    return this.http
      .post<AuthResponseData>(this.signinKey + this.apiKey, {
        email: email,
        password: pswrd,
        returnSecureToken: true,
      })
      .pipe(
        catchError(this.errorHandle),
        tap((responseData) => {
          this.authHandle(
            responseData.email,
            responseData.localId,
            responseData.idToken,
            +responseData.expiresIn
          );
        })
      );
  }

  logout() {
    this.user.next(null);
    this.router.navigate(['/auth']);
  }

  private authHandle(
    email: string,
    userid: string,
    token: string,
    expires: number
  ) {
    const date = new Date(new Date().getTime() + +expires * 1000);
    const user = new User(email, userid, token, date);
    this.user.next(user);
  }

  private errorHandle(errorResponse: HttpErrorResponse) {
    let errorMessage = 'error occurred';
    if (!errorResponse.error || !errorResponse.error.error) {
      return throwError(() => new Error(errorMessage));
    }
    switch (errorResponse.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage = 'email already exists ';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage = 'email not found';
        break;
      case 'INVALID_PASSWORD':
        errorMessage = 'invalid password';
        break;
      default:
        errorMessage;
        break;
    }
    return throwError(() => new Error(errorMessage));
  }

  constructor(private http: HttpClient, private router: Router) {}
}
