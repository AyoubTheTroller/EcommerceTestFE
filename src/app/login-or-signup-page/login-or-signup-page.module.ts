import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LoginOrSignupPageRoutingModule } from './login-or-signup-page-routing.module';
import { LoginFormComponent } from './login-form/login-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { OrLoginWithComponent } from './or-login-with/or-login-with.component';
import { LoginOrSignupComponent } from './login-or-signup/login-or-signup.component';


@NgModule({
  declarations: [
    LoginFormComponent,
    SignupFormComponent,
    OrLoginWithComponent,
    LoginOrSignupComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    LoginOrSignupPageRoutingModule
  ]
})
export class LoginOrSignupPageModule { }
