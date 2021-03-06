import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

import { SidebarComponent } from './sidebar.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    SidebarComponent
  ],
  exports: [
    SidebarComponent
  ]
})
export class SidebarModule { }
