import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrationComponent } from './registration.component';
import { FirstStepComponent }    from './first-step/first-step.component';
import { SecondStepComponent }   from './second-step/second-step.component';
import { ThirdStepComponent }    from './third-step/third-step.component';

import { SecondStepListsResolver }               from './second-step/second-step-lists-resolver.service';
import { MedUserByAuthResolver }                 from './shared/med-user-by-auth-resolver.service';
import { MedDocumentConfigurationsResolver }     from './third-step/med-document-configurations-resolver.service';

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
          medUser: MedUserByAuthResolver,
          lists: SecondStepListsResolver
        }
      },
      {
        path: 'step-3',
        component: ThirdStepComponent,
        resolve: {
          medUser: MedUserByAuthResolver,
          medDocumentConfigurations: MedDocumentConfigurationsResolver
        }
      }
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
    MedUserByAuthResolver,
    MedDocumentConfigurationsResolver
  ]
})
export class RegistrationRoutingModule { }
