import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingsComponent } from './settings.component';
import { AccountComponent } from './account/account.component';
import { SecurityComponent } from './security/security.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { BlockingComponent } from './blocking/blocking.component';

const routes: Routes = [
  {
    path: '',
    component: SettingsComponent,
    children: [
      {
        path: 'compte',
        component: AccountComponent
      },
      {
        path: 'securite',
        component: SecurityComponent
      },
      {
        path: 'confidentialite',
        component: PrivacyComponent
      },
      {
        path: 'notifications',
        component: NotificationsComponent
      },
      {
        path: 'blocage',
        component: BlockingComponent
      },
      { path: '', redirectTo: 'compte' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
