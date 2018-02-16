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

import { RightbarComponent }             from './rightbar/rightbar.component';
import { RightbarSponsoredComponent }    from './rightbar/rightbar-sponsored/rightbar-sponsored.component';
import { RightbarWeeklyPollComponent }   from './rightbar/rightbar-weekly-poll/rightbar-weekly-poll.component';
import { RightbarEventComponent }        from './rightbar/rightbar-event/rightbar-event.component';
import { RightbarMedCaseComponent }      from './rightbar/rightbar-med-case/rightbar-med-case.component';
import { RightbarSuggestionsComponent }  from './rightbar/rightbar-suggestions/rightbar-suggestions.component';

import { ProfileLableComponent }         from './profile-lable/profile-lable.component';
import { ProfileInfoComponent }          from './profile-info/profile-info.component';

import { HomeComponent }                 from './home/home.component';
import { HomeNotificationComponent }     from './home/home-notification/home-notification.component';
import { PublishPostComponent }          from './home/publish-post/publish-post.component';
import { PublishPostService }            from './home/publish-post/shared/publish-post.service';
import { PublishDiscussionComponent }    from './home/publish-post/publish-discussion/publish-discussion.component';
import { PublishMedCaseComponent }       from './home/publish-post/publish-med-case/publish-med-case.component';
import { PublishListingComponent }       from './home/publish-post/publish-listing/publish-listing.component';
import { PublishDocumentComponent }      from './home/publish-post/publish-document/publish-document.component';

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

    RightbarComponent,
    RightbarSponsoredComponent,
    RightbarWeeklyPollComponent,
    RightbarEventComponent,
    RightbarMedCaseComponent,
    RightbarSuggestionsComponent,

    ProfileLableComponent,
    ProfileInfoComponent,

    HomeComponent,
    HomeNotificationComponent,
    PublishPostComponent,
    PublishDiscussionComponent,
    PublishMedCaseComponent,
    PublishListingComponent,
    PublishDocumentComponent,

    ProfileComponent,
  ],
  providers: [
    PublishPostService
  ]
})
export class PlatformModule { }
