import { NgModule }     from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { PlatformRoutingModule }         from './platform-routing.module';
import { PlatformComponent }             from './platform.component';

import { NavbarComponent }               from './navbar/navbar.component';
import { NavbarSearchComponent }         from './navbar/navbar-search/navbar-search.component';
import { NavbarFriendRequestsComponent } from './navbar/navbar-friend-requests/navbar-friend-requests.component';
import { NavbarMessagesComponent }       from './navbar/navbar-messages/navbar-messages.component';
import { NavbarNotificationsComponent }  from './navbar/navbar-notifications/navbar-notifications.component';
import { NavbarAccountComponent }        from './navbar/navbar-account/navbar-account.component';

import { PlatformLayoutComponent }       from './platform-layout/platform-layout.component';
import { SidebarComponent }              from './sidebar/sidebar.component';
import { HomeComponent }                 from './home/home.component';
import { ProfileComponent }              from './profile/profile.component';

@NgModule({
  imports: [
    SharedModule,
    PlatformRoutingModule
  ],
  declarations: [
    PlatformComponent,
    NavbarComponent,
    NavbarSearchComponent,
    NavbarFriendRequestsComponent,
    NavbarMessagesComponent,
    NavbarNotificationsComponent,
    NavbarAccountComponent,
    PlatformLayoutComponent,
    SidebarComponent,
    HomeComponent,
    ProfileComponent
  ]
})
export class PlatformModule { }
