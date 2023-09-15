import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ChoreStartComponent } from './chores/chore-start/chore-start.component';
import { ChoreDetailComponent } from './chores/chore-detail/chore-detail.component';
import { ChoreEditComponent } from './chores/chore-edit/chore-edit.component';
import { ChoreItemComponent } from './chores/chore-list/chore-item/chore-item.component';
import { ChoreService } from './chores/chore.service';
import { ChoreListComponent } from './chores/chore-list/chore-list.component';
import { ChoreResolveService } from './chores/chore-resolve.service';
import { ChoresComponent } from './chores/chores.component';
import { HeaderComponent } from './header/header.component';
import { AuthComponent } from './auth/auth/auth.component';
import { AuthInterceptor } from './auth/auth.interceptor';
import { AlertComponent } from './shared/alert/alert.component';
import { HelperDirective } from './shared/helper/helper.directive';
import { DropdownDirective } from './shared/dropdown.directive';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth.guard';

@NgModule({
  declarations: [
    AppComponent,

    HeaderComponent,

    ChoresComponent,
    ChoreStartComponent,

    ChoreListComponent,
    ChoreItemComponent,
    ChoreDetailComponent,
    ChoreEditComponent,

    AuthComponent,
    AlertComponent,
    HelperDirective,
    DropdownDirective,
    HelperDirective,
    LoadingSpinnerComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [
    ChoreResolveService,
    AuthService,
    AuthGuard,
    ChoreService,
    AuthInterceptor,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
