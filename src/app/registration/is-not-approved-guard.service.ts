import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/take';

import { AuthService } from '../login/auth.service';

@Injectable()
export class isNotApprovedGuard implements CanActivateChild {
  constructor(private authService: AuthService) { }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.authService.getCurrentMedUser()
      .take(1)
      .map((medUser) => !medUser.approved);
  }
}
