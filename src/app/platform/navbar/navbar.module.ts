import { NgModule }     from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

import { NavbarComponent }         from './navbar.component';
import { SearchComponent }         from './search/search.component';
import { FriendRequestsComponent } from './friend-requests/friend-requests.component';
import { MessagesComponent }       from './messages/messages.component';
import { NotificationsComponent }  from './notifications/notifications.component';
import { AccountComponent }        from './account/account.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    NavbarComponent,
    SearchComponent,
    FriendRequestsComponent,
    MessagesComponent,
    NotificationsComponent,
    AccountComponent
  ],
  exports: [
    NavbarComponent
  ],
})
export class NavbarModule { }
