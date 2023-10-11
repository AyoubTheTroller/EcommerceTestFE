import { Component } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
  logoUrl: string = 'assets/loginSignupPage/logo.png'; // binded via propertyBinding
  emailIconUrl: string = 'assets/loginSignupPage/emailIcon.jpg'; // binded via propertyBinding
  passwordIconUrl: string = 'assets/loginSignupPage/passwordIcon.jpg'; // binded via propertyBinding
  email: string = 'Enter your email';; // Two-Way Binding
  password: string = 'Enter your password'; // Two-Way Binding
  forgotPasswordText: string = 'Forgot Password?'; // interpolation binding
  loginButtonText: string = 'LOGIN'; // interpolation binding
  formTitle: string = 'LOGIN'; // interpolation binding


  onForgotPassword() { // Event Binding
  }

  onLogin() { // Event Binding
  }
}