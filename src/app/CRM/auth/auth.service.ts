import { Injectable } from '@angular/core';
import { reject } from 'q';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //// fake auth ///////////////////

  private credentials = {
    login: 'admin',
    password: 'admin'
  };

  private isUserLogged = false;

  /// fake login ///

  login(log, pass) {
    return new Promise((resolve, reject) => {
      if (log === this.credentials.login && pass === this.credentials.password) {
        this.isUserLogged = true;
        resolve();
      } else {
        reject();

      }
    });
  }


  isLoggedIn() {
    return this.isUserLogged;
  }

  constructor() { }
}
