import {
  ModuleWithProviders, NgModule,
  Optional, SkipSelf }      from '@angular/core';
import { CommonModule }     from '@angular/common';
import { NgbModule }        from '@ng-bootstrap/ng-bootstrap';

import { SDKBrowserModule }     from '../shared/sdk/index';
import { TextMasksService }     from './text-masks.service';
import { FormUtilitiesService } from './form-utilities.service';
import { CookieService }        from 'ngx-cookie-service';

@NgModule({
  imports: [
    CommonModule,
    SDKBrowserModule.forRoot(),
    NgbModule.forRoot()
  ],
  declarations: [],
  providers: [
    TextMasksService,
    FormUtilitiesService,
    CookieService
  ]
})
export class CoreModule {
  constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
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
