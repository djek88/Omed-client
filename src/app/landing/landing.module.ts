import { NgModule }     from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent }     from './landing.component';
import { HomeComponent }        from './home/home.component';

@NgModule({
  imports: [
    SharedModule,
    LandingRoutingModule
  ],
  declarations: [
    LandingComponent,
    HomeComponent
  ]
})
export class LandingModule { }
