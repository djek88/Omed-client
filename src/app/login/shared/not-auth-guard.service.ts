import { Injectable } from '@angular/core';
import {
  Router, Route,
  ActivatedRouteSnapshot, RouterStateSnapshot,
  CanActivate, CanActivateChild, CanLoad,
} from '@angular/router';

import { AuthService } from './auth.service';

@Injectable()
export class NotAuthGuard implements CanActivate, CanActivateChild, CanLoad {
  constructor(private authService: AuthService, private router: Router) { }

  canLoad(route: Route): boolean {
    return this.checkIsNotLogin();
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.checkIsNotLogin();
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canActivate(route, state);
  }

  checkIsNotLogin(): boolean {
    if (!this.authService.isLoggedIn()) {
      return true;
    }

    this.router.navigate(['/home']);
    return false;
  }

}
