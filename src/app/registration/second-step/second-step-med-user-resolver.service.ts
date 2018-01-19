import { Injectable }                                           from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { MedUser, AccountApi, LoopBackAuth } from '../../shared/sdk';

@Injectable()
export class SecondStepMedUserResolver implements Resolve<MedUser>{
  constructor(
    private accountApi: AccountApi,
    private auth: LoopBackAuth) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<MedUser> {
    return this.accountApi.getUser(this.auth.getCurrentUserId());
  }
}