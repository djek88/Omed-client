import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

import { Observable } from 'rxjs';

import { MedUser } from '../../shared/sdk';
import { AuthService } from '../../login';

@Injectable()
export class MedUserByAuthResolver implements Resolve<MedUser> {
  constructor(private authService: AuthService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<MedUser> {
    return this.authService.getCurrentMedUser();
  }
}
