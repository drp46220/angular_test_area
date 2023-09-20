import { Injectable } from '@angular/core';

import { Store } from '@ngrx/store';
import * as fromApp from '../store/app.reducer';
import * as authActions from '../auth/store/auth.actions';

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

  constructor(private store: Store<fromApp.AppState>) {}
}
