import { Component } from '@angular/core';

@Component({
  selector: 'app-or-login-with',
  templateUrl: './or-login-with.component.html',
  styleUrls: ['./or-login-with.component.scss']
})
export class OrLoginWithComponent {
  orLoginWithText: string = "Or Login with";
  googleBtnText: string = "Google";
  facebookBtnText: string = "Facebook";
  googleLogoUrl: string = "assets/loginSignupPage/GoogleLogo.png";
  facebookLogoUrl: string = "assets/loginSignupPage/FacebookLogo.png";
  
}
