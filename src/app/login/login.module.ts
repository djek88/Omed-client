import { NgModule }     from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { LoginRoutingModule }      from './login-routing.module';
import { LoginComponent }          from './login.component';
import { AuthService }             from './auth.service';
import { SignInComponent }         from './sign-in/sign-in.component';
import { ResetPasswordComponent }  from './reset-password/reset-password.component';
import { ChangePasswordComponent } from './change-password/change-password.component';

@NgModule({
  imports: [
    SharedModule,
    LoginRoutingModule
  ],
  declarations: [
    LoginComponent,
    SignInComponent,
    ResetPasswordComponent,
    ChangePasswordComponent
  ],
  providers: [
    AuthService
  ]
})
export class LoginModule { }
