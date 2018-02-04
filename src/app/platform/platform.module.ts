import { NgModule }     from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { PlatformRoutingModule } from './platform-routing.module';
import { PlatformComponent }     from './platform.component';
import { NavbarComponent }       from './navbar/navbar.component';
import { NavbarSearchComponent } from './navbar/navbar-search/navbar-search.component';

@NgModule({
  imports: [
    SharedModule,
    PlatformRoutingModule
  ],
  declarations: [
    PlatformComponent,
    NavbarComponent,
    NavbarSearchComponent,
  ]
})
export class PlatformModule { }
