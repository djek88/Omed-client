import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotAuthGuard }     from '../login/not-auth-guard.service';
import { LandingComponent } from './landing.component';
import { HomeComponent }    from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    //canActivateChild: [NotAuthGuard]
    children: [
      {
        path: '',
        component: HomeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
