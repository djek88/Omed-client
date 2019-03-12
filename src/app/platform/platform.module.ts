import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { PlatformRoutingModule } from './platform-routing.module';
import { NavbarModule } from './navbar/navbar.module';
import { SidebarModule } from './sidebar/sidebar.module';
import { RightbarModule } from './rightbar/rightbar.module';
import { HomeModule } from './home/home.module';
import { ProfileModule } from './profile/profile.module';

import { PlatformComponent } from './platform.component';
import { PlatformLayoutComponent } from './platform-layout/platform-layout.component';

import { ProfileLableComponent } from './profile-lable/profile-lable.component';
import { ProfileInfoComponent } from './profile-info/profile-info.component';

@NgModule({
  imports: [
    SharedModule,
    PlatformRoutingModule,
    NavbarModule,
    SidebarModule,
    RightbarModule,
    HomeModule,
    ProfileModule
  ],
  declarations: [
    PlatformComponent,
    PlatformLayoutComponent,

    ProfileLableComponent,
    ProfileInfoComponent
  ],
  providers: []
})
export class PlatformModule { }
