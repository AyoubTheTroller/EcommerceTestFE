import { Component } from '@angular/core';
import { LoginService} from 'src/app/authentication/login.service'
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {

  constructor(private loginService: LoginService) { }

  logoUrl: string = 'assets/loginSignupPage/logo.png'; // binded via propertyBinding
  emailIconUrl: string = 'assets/loginSignupPage/emailIcon.jpg'; // binded via propertyBinding
  passwordIconUrl: string = 'assets/loginSignupPage/passwordIcon.jpg'; // binded via propertyBinding
  email!: string; // Two-Way Binding
  password!: string; // Two-Way Binding
  forgotPasswordText: string = 'Forgot Password?'; // interpolation binding
  loginButtonText: string = 'LOGIN'; // interpolation binding
  formTitle: string = 'LOGIN'; // interpolation binding


  onForgotPassword() { // Event Binding
  }

  onLogin() {
    this.loginService.loginUser(this.email, this.password).pipe(
      tap(response => {
        console.log(response);
      }),
      catchError(error => {
        console.error('Login failed:', error);
        return of(null); 
      })
    ).subscribe();
  }
  
}