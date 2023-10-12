import { Component } from '@angular/core';
import { LoginService} from 'src/app/authentication/login.service'
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent {

  constructor(private loginService: LoginService) { }

  formTitle: string = 'SIGN UP';
  email!: string;
  password!: string;
  passwordRepeat!: string;
  troublesSigninUp: string = 'Troubles when signin up?';
  signUpButtonText:  string = 'SIGN UP';
  logoUrl: string = 'assets/loginSignupPage/logo.png';
  emailIconUrl: string = 'assets/loginSignupPage/emailIcon.jpg';
  passwordIconUrl: string = 'assets/loginSignupPage/passwordIcon.jpg';

  onTroublesSigningUp() {
    // Handle "Troubles signin up?" button action here
  }

  onSignUp() {
    this.loginService.signinUser(this.email, this.password).pipe(
      tap(response => {
        console.log(response);
      }),
      catchError(error => {
        console.error('Signup failed:', error);
        return of(null); 
      })
    ).subscribe();
  }
}
