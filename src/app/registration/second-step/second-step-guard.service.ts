import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/take';

import { AuthService } from '../../login/auth.service';

@Injectable()
export class SecondStepGuard implements CanActivate {
  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.authService.getCurrentMedUser()
      .take(1)
      .map((medUser) => {
        if (medUser.cityId || medUser.universityId ||
          medUser.hospitalId || medUser.specialtyId) {
          this.router.navigate(['/registration/step-3']);
          return false;
        } else {
          return true;
        }
      });
  }
}
