import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';

import { Observable } from 'rxjs';
import { take, map } from 'rxjs/operators';

import { AuthService } from '../../login';

@Injectable()
export class SecondStepGuard implements CanActivate {
  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.authService.getCurrentMedUser().pipe(
      take(1),
      map((medUser) => {
        if (medUser.cityId || medUser.universityId ||
          medUser.hospitalId || medUser.specialtyId) {
          this.router.navigate(['/registration/step-3']);
          return false;
        } else {
          return true;
        }
      })
    );
  }
}
