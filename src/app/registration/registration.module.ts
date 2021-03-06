import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { RegistrationRoutingModule } from './registration-routing.module';
import { RegistrationComponent } from './registration.component';
import { FirstStepComponent } from './first-step/first-step.component';
import { SecondStepComponent } from './second-step/second-step.component';
import { ThirdStepComponent } from './third-step/third-step.component';
import { FinishComponent } from './finish/finish.component';

import { SignUpService } from './shared/sign-up.service';

@NgModule({
  imports: [
    SharedModule,
    RegistrationRoutingModule
  ],
  declarations: [
    RegistrationComponent,
    FirstStepComponent,
    SecondStepComponent,
    ThirdStepComponent,
    FinishComponent
  ],
  providers: [
    SignUpService
  ]
})
export class RegistrationModule {}
