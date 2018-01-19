import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrationComponent } from './registration.component';
import { FirstStepComponent }    from './first-step/first-step.component';
import { SecondStepComponent }   from './second-step/second-step.component';
import { ThirdStepComponent }    from './third-step/third-step.component';

import { SecondStepListsResolver }   from './second-step/second-step-lists-resolver.service';
import { SecondStepMedUserResolver } from './second-step/second-step-med-user-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: RegistrationComponent,
    children: [
      { path: '', component: FirstStepComponent },
      {
        path: 'step-2',
        component: SecondStepComponent,
        resolve: {
          medUser: SecondStepMedUserResolver,
          lists: SecondStepListsResolver
        }
      },
      { path: 'step-3', component: ThirdStepComponent }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    SecondStepListsResolver,
    SecondStepMedUserResolver
  ]
})
export class RegistrationRoutingModule { }
