import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot,
  CanActivate, CanActivateChild } from '@angular/router';

import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class NotApprovedGuard implements CanActivate, CanActivateChild {
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
        if (!medUser.approved) {
          return true;
        }

        this.router.navigate(['/home']);
        return false;
      })
    );
  }
}
