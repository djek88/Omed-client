import { NgModule }     from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

import { HomeComponent }              from './home.component';
import { NotificationComponent }      from './notification/notification.component';
import { PublishPostComponent }       from './publish-post/publish-post.component';
import { PublishPostService }         from './publish-post/shared/publish-post.service';
import { PublishDiscussionComponent } from './publish-post/publish-discussion/publish-discussion.component';
import { PublishMedCaseComponent }    from './publish-post/publish-med-case/publish-med-case.component';
import { PublishListingComponent }    from './publish-post/publish-listing/publish-listing.component';
import { PublishDocumentComponent }   from './publish-post/publish-document/publish-document.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    HomeComponent,
    NotificationComponent,
    PublishPostComponent,
    PublishDiscussionComponent,
    PublishMedCaseComponent,
    PublishListingComponent,
    PublishDocumentComponent
  ],
  exports: [
    HomeComponent
  ],
  providers: [
    PublishPostService
  ]
})
export class HomeModule { }
