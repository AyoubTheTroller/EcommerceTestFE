import { Component } from '@angular/core';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent {
  formTitle: string = 'SIGN UP';
  email: string = 'Enter Email';
  password: string = 'Enter Password';
  passwordRepeat: string = 'Repeat Password';
  troublesSigninUp: string = 'Troubles when signin up?';
  signUpButtonText:  string = 'SIGN UP';
  logoUrl: string = 'assets/data/logo.png';
  emailIconUrl: string = 'assets/loginSignupPage/emailIcon.jpg';
  passwordIconUrl: string = 'assets/loginSignupPage/passwordIcon.jpg';

  onTroublesSigningUp() {
    // Handle "Troubles signin up?" button action here
  }

  onSignUp() {
    // Handle sign up logic here
  }
}
