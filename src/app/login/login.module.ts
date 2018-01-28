import { NgModule }     from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { LoginRoutingModule }     from './login-routing.module';
import { LoginComponent }         from './login.component';
import { AuthGuard }              from './auth-guard.service';
import { AuthService }            from './auth.service';
import { SignInComponent }        from './sign-in/sign-in.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

@NgModule({
  imports: [
    SharedModule,
    LoginRoutingModule
  ],
  declarations: [
    LoginComponent,
    SignInComponent,
    ResetPasswordComponent
  ],
  providers: [
    AuthGuard,
    AuthService
  ]
})
export class LoginModule { }
