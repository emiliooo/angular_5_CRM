import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login = '';
  pass = '';
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this.auth.login(this.login, this.pass).then(this.onSubmitSuccess.bind(this), this.OnSubmitFail);
  }

  onSubmitSuccess() {
    this.router.navigate(['/clients']);
  }
  OnSubmitFail() {
    console.log('pass or login is wrong');
  }


}
