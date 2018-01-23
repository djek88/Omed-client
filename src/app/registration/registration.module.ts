import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { SignUpService } from './shared/sign-up.service';

import { RegistrationRoutingModule } from './registration-routing.module';
import { RegistrationComponent } from './registration.component';
import { FirstStepComponent } from './first-step/first-step.component';
import { SecondStepComponent } from './second-step/second-step.component';
import { ThirdStepComponent } from './third-step/third-step.component';

@NgModule({
  imports: [
    SharedModule,
    RegistrationRoutingModule
  ],
  declarations: [
    RegistrationComponent,
    FirstStepComponent,
    SecondStepComponent,
    ThirdStepComponent
  ],
  providers: [
    SignUpService
  ]
})
export class RegistrationModule { }
