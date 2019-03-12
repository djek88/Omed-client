import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot,
  CanActivate, CanActivateChild } from '@angular/router';

import { Observable } from 'rxjs';
import { take, map } from 'rxjs/operators';

import { AuthService } from './auth.service';

@Injectable()
export class ApprovedGuard implements CanActivate, CanActivateChild {
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.checkApproval();
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.canActivate(route, state);
  }

  checkApproval(): Observable<boolean> {
    return this.authService.getCurrentMedUser().pipe(
      take(1),
      map((medUser) => {
        if (medUser.approved) {
          return true;
        }

        this.router.navigate(['/registration', 'step-2']);
        return false;
      })
    );
  }
}
