import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface AuthResponseData {
  // kind: string; //not shown in api docs for some reason
  idToken: string; // A Firebase Auth ID token for the newly created user.
  email: string; // The email for the newly created user.
  refreshToken: string; // A Firebase Auth refresh token for the newly created user.
  expiresIn: string; //The number of seconds in which the ID token expires.
  localId: string; // The uid of the newly created user.
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // signs up and logs in to FireBase
  postKey = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=';

  apiKey = 'AIzaSyBNUvsG5N7mhCGLn5iJOla5J4mHUHsUJfA';

  signUp(email: string, pswrd: string) {
    return this.http.post<AuthResponseData>(this.postKey + this.apiKey, {
      email: email,
      password: pswrd,
      returnSecureToken: true,
    });
  }

  constructor(private http: HttpClient) {}
}
