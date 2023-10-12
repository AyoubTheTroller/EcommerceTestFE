import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login-or-signup',
  templateUrl: './login-or-signup.component.html',
  styleUrls: ['./login-or-signup.component.scss']
})
export class LoginOrSignupComponent {
  loginBtnText: string = "LOGIN";
  signinBtnText: string = "SIGN IN";
  backgroundUrl: string = "assets/loginSignupPage/15.jpg";
  isSelectedLogin: boolean = true;

  @Output() formToShow = new EventEmitter<boolean>();
  
  showLogin() {
    this.isSelectedLogin = true;
    this.formToShow.emit(true); // true for showing login form
  }

  showSignup() {
    this.isSelectedLogin = false;
    this.formToShow.emit(false); // false for showing sign-up form
  }
}
