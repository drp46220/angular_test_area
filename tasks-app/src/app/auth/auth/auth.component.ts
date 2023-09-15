import {
  Component,
  ComponentFactoryResolver,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthResponseData, AuthService } from '../auth.service';
import { Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { AlertComponent } from 'src/app/shared/alert/alert.component';
import { HelperDirective } from 'src/app/shared/helper/helper.directive';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnDestroy {
  loginMode = true;
  isLoading = false;
  error: string = null;
  @ViewChild(HelperDirective, { static: false }) alertHost: HelperDirective;
  closeSub: Subscription;

  constructor(
    private authService: AuthService,
    private router: Router,
    private c: ComponentFactoryResolver
  ) {}

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const pswrd = form.value.password;
    console.log(form.value);

    let authObsv = new Observable<AuthResponseData>();

    this.isLoading = true;
    if (this.loginMode) {
      authObsv = this.authService.login(email, pswrd);
    } else {
      authObsv = this.authService.signUp(email, pswrd);
    }

    authObsv.subscribe(
      (resData) => {
        console.log(resData);
        this.isLoading = false;
        this.router.navigate(['/chores']);
      },
      (errorMessage) => {
        console.log(errorMessage);
        this.showErrorAlert(errorMessage);
        this.error = errorMessage;

        this.isLoading = false;
      }
    );

    form.reset();
  }

  switchMode() {
    this.loginMode = !this.loginMode;
  }

  onErrorHandle() {
    this.error = null;
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
  }
}
