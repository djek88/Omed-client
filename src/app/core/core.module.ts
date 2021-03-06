import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SDKBrowserModule } from './sdk';

import { CookieService } from 'ngx-cookie-service';

@NgModule({
  imports: [
    CommonModule,
    // NgbModule.forRoot(),
    SDKBrowserModule.forRoot(),
  ],
  declarations: [],
  providers: [
    CookieService
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    /* Prevent reimport of the CoreModule */
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }

  /*static forRoot(config: UserServiceConfig): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        { provide: UserServiceConfig, useValue: config }
      ]
    };
  }*/
}
