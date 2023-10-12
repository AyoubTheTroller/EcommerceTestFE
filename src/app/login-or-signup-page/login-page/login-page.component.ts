import { Component } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {

  showLoginForm: boolean = true; // default to showing the login form

  onFormToShow(showLogin: boolean) {
    this.showLoginForm = showLogin;
  }
}
