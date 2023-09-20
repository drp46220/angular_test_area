import {
  Component,
  ComponentFactoryResolver,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AlertComponent } from 'src/app/shared/alert/alert.component';
import { HelperDirective } from 'src/app/shared/helper/helper.directive';
import { Store } from '@ngrx/store';
import * as fromApp from '../../store/app.reducer';
import * as fromAuthActions from '../store/auth.actions';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit, OnDestroy {
  loginMode = true;
  isLoading = false;
  error: string = null;
  @ViewChild(HelperDirective, { static: false }) alertHost: HelperDirective;
  closeSub: Subscription;
  storeSub: Subscription;

  constructor(
    private c: ComponentFactoryResolver,
    private store: Store<fromApp.AppState>
  ) {}

  ngOnInit() {
    // setup subscription to the store
    this.storeSub = this.store.select('auth').subscribe((authState) => {
      this.isLoading = authState.loading;
      this.error = authState.authError;
      if (this.error) {
        this.showErrorAlert(this.error);
      }
    });
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const pswrd = form.value.password;
    console.log(form.value);

    // let authObsv: Observable<AuthResponseData>;

    this.isLoading = true;
    if (this.loginMode) {
      // authObsv = this.authService.login(email, pswrd);
      this.store.dispatch(
        new fromAuthActions.Login({ email: email, pswrd: pswrd })
      );
    } else {
      // authObsv = this.authService.signUp(email, pswrd);
      this.store.dispatch(
        new fromAuthActions.SignUp({ email: email, pswrd: pswrd })
      );
    }
    form.reset();
  }

  switchMode() {
    this.loginMode = !this.loginMode;
  }

  onErrorHandle() {
    this.store.dispatch(new fromAuthActions.ClearError());
  }

  private showErrorAlert(errorMessage: string) {
    // let angular create component
    const alertComp = this.c.resolveComponentFactory(AlertComponent);

    const hostViewContRef = this.alertHost.viewContainerRef;
    hostViewContRef.clear();

    const compRef = hostViewContRef.createComponent(AlertComponent);

    compRef.instance.message = errorMessage;
    this.closeSub = compRef.instance.close.subscribe(() => {
      this.closeSub.unsubscribe();
      hostViewContRef.clear();
    });
  }

  ngOnDestroy() {
    if (this.closeSub) {
      this.closeSub.unsubscribe();
    }
    if (this.storeSub) {
      this.storeSub.unsubscribe();
    }
  }
}
