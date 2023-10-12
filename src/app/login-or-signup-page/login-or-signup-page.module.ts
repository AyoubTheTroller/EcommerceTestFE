import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LoginOrSignupPageRoutingModule } from './login-or-signup-page-routing.module';
import { LoginFormComponent } from './login-page/login-form/login-form.component';
import { SignupFormComponent } from './login-page/signup-form/signup-form.component';
import { OrLoginWithComponent } from './login-page/or-login-with/or-login-with.component';
import { LoginOrSignupComponent } from './login-page/login-or-signup/login-or-signup.component';
import { LoginPageComponent } from './login-page/login-page.component';


@NgModule({
  declarations: [
    LoginFormComponent,
    SignupFormComponent,
    OrLoginWithComponent,
    LoginOrSignupComponent,
    LoginPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    LoginOrSignupPageRoutingModule
  ]
})
export class LoginOrSignupPageModule { }
