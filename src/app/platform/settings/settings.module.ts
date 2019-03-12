import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';
import { AccountComponent } from './account/account.component';
import { SecurityComponent } from './security/security.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { BlockingComponent } from './blocking/blocking.component';

@NgModule({
  imports: [
    SharedModule,
    SettingsRoutingModule
  ],
  declarations: [
    SettingsComponent,
    AccountComponent,
    SecurityComponent,
    PrivacyComponent,
    NotificationsComponent,
    BlockingComponent
  ]
})
export class SettingsModule { }
