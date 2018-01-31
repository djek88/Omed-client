import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard }               from './auth-guard.service';
import { NotAuthGuard }            from './not-auth-guard.service';
import { LoginComponent }          from './login.component';
import { SignInComponent }         from './sign-in/sign-in.component';
import { ResetPasswordComponent }  from './reset-password/reset-password.component';
import { ChangePasswordComponent } from './change-password/change-password.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    children: [
      {
        path: '',
        component: SignInComponent,
        //canActivate: [NotAuthGuard]
      },
      {
        path: 'reset-password',
        component: ResetPasswordComponent
      },
      {
        path: 'change-password/:accessToken',
        component: ChangePasswordComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  providers: [
    AuthGuard,
    NotAuthGuard
  ]
})
export class LoginRoutingModule { }
