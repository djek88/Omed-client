import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlatformComponent } from './platform.component';
import { HomeComponent }     from './home/home.component';

const routes: Routes = [{
  path: '',
  component: PlatformComponent,
  children: [
    {
      path: 'home',
      component: HomeComponent
    },
    /*{
      path: ''
    }*/
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlatformRoutingModule { }
