import { Component, OnInit } from '@angular/core';

import * as AuthActions from './auth/store/auth.actions';
import * as fromApp from './store/app.reducer';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private store: Store<fromApp.AppState>) {}

  ngOnInit() {
    // this.authService.autoLogin();
    this.store.dispatch(new AuthActions.AutoLogin());
  }
  // loadedFeature = 'recipe';

  // onNavigate(feature: string) {
  //   this.loadedFeature = feature;
  // }
}
