import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'registration',
    loadChildren: './registration/registration.module#RegistrationModule'
  },
  { path: '', redirectTo: 'registration', pathMatch: 'full' },
  //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      {
        enableTracing: false, // <-- debugging purposes only
        //preloadingStrategy: PreloadAllModules
        //preloadingStrategy: SelectivePreloadingStrategy
      }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
