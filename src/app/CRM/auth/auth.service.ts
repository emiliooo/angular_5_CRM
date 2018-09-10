import { Injectable } from '@angular/core';
import { reject } from 'q';
import { LayoutService } from '../../shared-module/layout.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private layoutService: LayoutService) {}

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
        this.layoutService.showSidebar();
        resolve();
      } else {
        reject();
      }
    });
  }


  isLoggedIn() {
    return this.isUserLogged;
  }

}
