import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';
import { Subscription, map } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromApp from '../store/app.reducer';
import * as AuthActions from '../auth/store/auth.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  private userSub: Subscription;
  isAuth = false;

  constructor(
    private data_storage: DataStorageService,
    private authService: AuthService,
    private store: Store<fromApp.AppState>
  ) {}

  ngOnInit() {
    this.userSub = this.store
      .select('auth')
      .pipe(
        map((authState) => {
          return authState.user;
        })
      )
      .subscribe((user) => {
        // these 2 lines do the same thing
        // this.isAuth = !user ? false : true;
        this.isAuth = !!user;
        // sets (isAuth) to true if not false since it starts (=== false)
        console.log('!user' + !user);
        console.log('!!user' + !!user);
      });
  }

  Save() {
    this.data_storage.recipeStore();
  }

  Fetch() {
    this.data_storage.recipeFetch().subscribe();
  }

  Logout() {
    this.store.dispatch(new AuthActions.Logout());
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }
}
