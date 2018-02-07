import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard, NotApprovedGuard } from '../login';
import { SecondStepGuard }             from './second-step/second-step-guard.service';
import { ThirdStepGuard }              from './third-step/third-step-guard.service';
import { FinishStepGuard }             from './finish/finish-step-guard.service';

import { SecondStepListsResolver }           from './second-step/second-step-lists-resolver.service';
import { MedUserByAuthResolver }             from './shared/med-user-by-auth-resolver.service';
import { MedDocumentConfigurationsResolver } from './third-step/med-document-configurations-resolver.service';

import { RegistrationComponent } from './registration.component';
import { FirstStepComponent }    from './first-step/first-step.component';
import { SecondStepComponent }   from './second-step/second-step.component';
import { ThirdStepComponent }    from './third-step/third-step.component';
import { FinishComponent }       from './finish/finish.component';

const routes: Routes = [
  {
    path: '',
    component: RegistrationComponent,
    children: [
      {
        path: '',
        component: FirstStepComponent
      },
      {
        path: '',
        canActivateChild: [AuthGuard, NotApprovedGuard],
        children: [
          {
            path: 'step-2',
            component: SecondStepComponent,
            canActivate: [SecondStepGuard],
            resolve: {
              medUser: MedUserByAuthResolver,
              lists: SecondStepListsResolver
            }
          },
          {
            path: 'step-3',
            component: ThirdStepComponent,
            canActivate: [ThirdStepGuard],
            resolve: {
              medUser: MedUserByAuthResolver,
              medDocumentConfigurations: MedDocumentConfigurationsResolver
            }
          },
          {
            path: 'finish',
            canActivate: [FinishStepGuard],
            component: FinishComponent
          }
        ]
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
    SecondStepGuard,
    ThirdStepGuard,
    FinishStepGuard,
    SecondStepListsResolver,
    MedUserByAuthResolver,
    MedDocumentConfigurationsResolver
  ]
})
export class RegistrationRoutingModule { }
