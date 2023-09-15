import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth/auth.component';
import { ChoreResolveService } from './chores/chore-resolve.service';
import { ChoreEditComponent } from './chores/chore-edit/chore-edit.component';
import { ChoreDetailComponent } from './chores/chore-detail/chore-detail.component';
import { ChoreStartComponent } from './chores/chore-start/chore-start.component';
import { AuthGuard } from './auth/auth.guard';
import { ChoresComponent } from './chores/chores.component';

const routes: Routes = [
  { path: 'auth', component: AuthComponent },
  { path: '', redirectTo: '/chores', pathMatch: 'full' }, // starting path on first load
  {
    path: 'chores',
    component: ChoresComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: ChoreStartComponent },
      // if 'new' is after ':id' it will try to parse 'new' as an id and cause an error
      { path: 'new', component: ChoreEditComponent },
      {
        path: ':id',
        component: ChoreDetailComponent,
        resolve: [ChoreResolveService],
      },
      {
        path: ':id/edit',
        component: ChoreEditComponent,
        resolve: [ChoreResolveService],
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
