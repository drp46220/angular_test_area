import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';

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
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.userSub = this.authService.user.subscribe((user) => {
      // these 2 lines do the same thing
      // this.isAuth = !user ? false : true;
      this.isAuth = !!user;
      // sets (isAuth) to true if not false since it starts (=== false)
    });
  }

  Save() {
    this.data_storage.choreStore();
  }

  Fetch() {
    this.data_storage.choreFetch().subscribe();
  }

  Logout() {
    this.authService.logout();
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }
}
