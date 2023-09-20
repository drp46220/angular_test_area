import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromApp from '../store/app.reducer';
import * as authActions from '../auth/store/auth.actions';

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
  tokenTimer: any;

  autoLogout(duration: number) {
    this.tokenTimer = setTimeout(() => {
      this.store.dispatch(new authActions.Logout());
    }, duration);
  }

  clearLogoutTimer() {
    if (this.tokenTimer) {
      clearTimeout(this.tokenTimer);
      this.tokenTimer = null;
    }
  }

  constructor(
    private http: HttpClient,
    private router: Router,
    private store: Store<fromApp.AppState>
  ) {}
}
