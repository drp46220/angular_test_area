import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthResponseData, AuthService } from '../auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent {
  loginMode = true;
  isLoading = false;
  error: string = null;

  constructor(private authService: AuthService) {}

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const pswrd = form.value.password;
    console.log(form.value);

    let authObsv: Observable<AuthResponseData>;

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
      },
      (errorMessage) => {
        console.log(errorMessage);
        this.error = errorMessage;

        this.isLoading = false;
      }
    );

    form.reset();
  }

  switchMode() {
    this.loginMode = !this.loginMode;
  }
}
