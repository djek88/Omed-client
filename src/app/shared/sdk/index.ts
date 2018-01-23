/* tslint:disable */
/**
* @module SDKModule
* @author Jonathan Casarrubias <t:@johncasarrubias> <gh:jonathan-casarrubias>
* @license MIT 2016 Jonathan Casarrubias
* @version 2.1.0
* @description
* The SDKModule is a generated Software Development Kit automatically built by
* the LoopBack SDK Builder open source module.
*
* The SDKModule provides Angular 2 >= RC.5 support, which means that NgModules
* can import this Software Development Kit as follows:
*
*
* APP Route Module Context
* ============================================================================
* import { NgModule }       from '@angular/core';
* import { BrowserModule }  from '@angular/platform-browser';
* // App Root 
* import { AppComponent }   from './app.component';
* // Feature Modules
* import { SDK[Browser|Node|Native]Module } from './shared/sdk/sdk.module';
* // Import Routing
* import { routing }        from './app.routing';
* @NgModule({
*  imports: [
*    BrowserModule,
*    routing,
*    SDK[Browser|Node|Native]Module.forRoot()
*  ],
*  declarations: [ AppComponent ],
*  bootstrap:    [ AppComponent ]
* })
* export class AppModule { }
*
**/
import { JSONSearchParams } from './services/core/search.params';
import { ErrorHandler } from './services/core/error.service';
import { LoopBackAuth } from './services/core/auth.service';
import { LoggerService } from './services/custom/logger.service';
import { SDKModels } from './services/custom/SDKModels';
import { InternalStorage, SDKStorage } from './storage/storage.swaps';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CookieBrowser } from './storage/cookie.browser';
import { StorageBrowser } from './storage/storage.browser';
import { SocketBrowser } from './sockets/socket.browser';
import { SocketDriver } from './sockets/socket.driver';
import { SocketConnection } from './sockets/socket.connections';
import { RealTime } from './services/core/real.time';
import { AccountApi } from './services/custom/Account';
import { MedUserApi } from './services/custom/MedUser';
import { UniversityApi } from './services/custom/University';
import { HospitalApi } from './services/custom/Hospital';
import { SpecialtyApi } from './services/custom/Specialty';
import { CityApi } from './services/custom/City';
import { GroupApi } from './services/custom/Group';
import { PostApi } from './services/custom/Post';
import { LikeApi } from './services/custom/Like';
import { CommentApi } from './services/custom/Comment';
import { MedCaseApi } from './services/custom/MedCase';
import { ListingApi } from './services/custom/Listing';
import { EventApi } from './services/custom/Event';
import { DiscussionApi } from './services/custom/Discussion';
import { DocumentsApi } from './services/custom/Documents';
import { OfferApi } from './services/custom/Offer';
import { NewscastApi } from './services/custom/Newscast';
import { CompanyApi } from './services/custom/Company';
import { AudienceApi } from './services/custom/Audience';
import { PoolApi } from './services/custom/Pool';
import { AnswerApi } from './services/custom/Answer';
import { VoteApi } from './services/custom/Vote';
import { MedUserMedDocumentApi } from './services/custom/MedUserMedDocument';
import { AdditionalApi } from './services/custom/Additional';
/**
* @module SDKBrowserModule
* @description
* This module should be imported when building a Web Application in the following scenarios:
*
*  1.- Regular web application
*  2.- Angular universal application (Browser Portion)
*  3.- Progressive applications (Angular Mobile, Ionic, WebViews, etc)
**/
@NgModule({
  imports:      [ CommonModule, HttpModule ],
  declarations: [ ],
  exports:      [ ],
  providers:    [
    ErrorHandler,
    SocketConnection
  ]
})
export class SDKBrowserModule {
  static forRoot(internalStorageProvider: any = {
    provide: InternalStorage,
    useClass: CookieBrowser
  }): ModuleWithProviders {
    return {
      ngModule  : SDKBrowserModule,
      providers : [
        LoopBackAuth,
        LoggerService,
        JSONSearchParams,
        SDKModels,
        RealTime,
        AccountApi,
        MedUserApi,
        UniversityApi,
        HospitalApi,
        SpecialtyApi,
        CityApi,
        GroupApi,
        PostApi,
        LikeApi,
        CommentApi,
        MedCaseApi,
        ListingApi,
        EventApi,
        DiscussionApi,
        DocumentsApi,
        OfferApi,
        NewscastApi,
        CompanyApi,
        AudienceApi,
        PoolApi,
        AnswerApi,
        VoteApi,
        MedUserMedDocumentApi,
        AdditionalApi,
        internalStorageProvider,
        { provide: SDKStorage, useClass: StorageBrowser },
        { provide: SocketDriver, useClass: SocketBrowser }
      ]
    };
  }
}
/**
* Have Fun!!!
* - Jon
**/
export * from './models/index';
export * from './services/index';
export * from './lb.config';
export * from './storage/storage.swaps';
export { CookieBrowser } from './storage/cookie.browser';
export { StorageBrowser } from './storage/storage.browser';

