import { Injectable } from '@angular/core';
import {
  Router,
  ActivatedRouteSnapshot, RouterStateSnapshot,
  CanActivate, CanActivateChild
} from '@angular/router';

import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // absolute path with query params, anchor, etc
    const url = state.url;

    return this.checkLogin(url);
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canActivate(route, state);
  }

  checkLogin(url: string): boolean {
    if (this.authService.isLoggedIn()) {
      return true;
    }

    this.authService.redirectUrl = url;

    this.router.navigate(['/login']);
    return false;
  }
}
