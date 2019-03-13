import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';

import { Observable } from 'rxjs';
import { take, map } from 'rxjs/operators';

import { AuthService } from '../../login';

@Injectable()
export class ThirdStepGuard implements CanActivate {
  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.authService.getCurrentMedUser().pipe(
      take(1),
      map((medUser) => {
        if (!medUser.cityId) {
          this.router.navigate(['/registration/step-2']);
          return false;
        } else if (medUser.medDocuments.length && !medUser.moreProof) {
          this.router.navigate(['/registration/finish']);
          return false;
        } else {
          return true;
        }
      })
    );
  }
}
