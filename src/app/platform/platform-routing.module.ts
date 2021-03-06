import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard, ApprovedGuard } from '../login';

import { PlatformComponent } from './platform.component';
import { PlatformLayoutComponent } from './platform-layout/platform-layout.component';

import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [{
  path: '',
  component: PlatformComponent,
  canActivate: [AuthGuard, ApprovedGuard],
  children: [
    {
      path: 'parametres',
      loadChildren: './settings/settings.module#SettingsModule'
    },
    {
      path: '',
      component: PlatformLayoutComponent,
      children: [
        { path: '',  pathMatch: 'full', redirectTo: 'home' },
        {
          path: 'home',
          component: HomeComponent
        },
        {
          path: ':username',
          component: ProfileComponent
        },
        { path: '**', pathMatch: 'full', redirectTo: 'home' }
      ]
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlatformRoutingModule { }
