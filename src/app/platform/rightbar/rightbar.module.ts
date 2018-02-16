import { NgModule }     from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

import { RightbarComponent }    from './rightbar.component';
import { SponsoredComponent }   from './sponsored/sponsored.component';
import { WeeklyPollComponent }  from './weekly-poll/weekly-poll.component';
import { EventComponent }       from './event/event.component';
import { MedCaseComponent }     from './med-case/med-case.component';
import { SuggestionsComponent } from './suggestions/suggestions.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    RightbarComponent,
    SponsoredComponent,
    WeeklyPollComponent,
    EventComponent,
    MedCaseComponent,
    SuggestionsComponent
  ],
  exports: [
    RightbarComponent
  ]
})
export class RightbarModule { }
