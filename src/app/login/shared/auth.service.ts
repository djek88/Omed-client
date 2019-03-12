import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';

import { LoopBackConfig, LoopBackAuth, AccountApi, Account, MedUser } from '../../shared/sdk';
import { CookieService } from 'ngx-cookie-service';
import { switchMap, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  redirectUrl: string;

  constructor(
    private auth: LoopBackAuth,
    private accountApi: AccountApi,
    private cookieService: CookieService,
    private router: Router
  ) { }

  isLoggedIn() {
    return this.accountApi.isAuthenticated();
  }

  login(credentials: any, rememeberMe?: boolean) {
    return this.accountApi.login(credentials, null, rememeberMe).pipe(
      switchMap(() => this.getCurrentUserData()),
      map(() => this.auth.getToken)
    );

    /*let loginRes;

    return this.accountApi.login(credentials, null, rememeberMe)
      .flatMap((data) => {
        loginRes = data;
        return this.accountApi.findById(loginRes.userId, { include: 'user' });
      })
      .map((account: Account) => {
        this.auth.setUser(account);
        loginRes.user = account;
        console.log(loginRes);
        return loginRes;
      });*/
  }

  logout() {
    this.setLastSignedInUserData();
    return this.accountApi.logout();
  }

  resetPasswordRequest(email: string) {
    return this.accountApi.resetPassword({email});
  }

  setPassword(password: string, accessTokenId: string) {
    return this.accountApi.setPassword(password, (headers) => {
      headers.set('Authorization', LoopBackConfig.getAuthPrefix() + accessTokenId);
      return headers;
    });
  }

  afterLoginRedirect() {
    if (this.isLoggedIn()) {
      // Redirect the user with "navigateByUrl",
      // due to "redirectUrl" is absolute path with query params, anchor, etc
      this.router.navigateByUrl(this.redirectUrl || '/');
    }
  }

  setLastSignedInUserData() {
    const account = this.accountApi.getCachedCurrent();
    const credentials = {
      name: account.user.firstName + ' ' + account.user.lastName,
      email: account.email
    };
    this.cookieService.set('lastSignedInUserData', JSON.stringify(credentials), 1000);
  }

  getLastSignedInUserData() {
    try {
      return JSON.parse(this.cookieService.get('lastSignedInUserData'));
    } catch (err) {
      return null;
    }
  }

  deleteLastSignedInUserData() {
    this.cookieService.delete('lastSignedInUserData');
  }

  markAsHasSignedIn() {
    this.cookieService.set('hasSignedIn', 'true', 1000);
  }

  isHasSignedIn() {
    return this.cookieService.check('hasSignedIn');
  }

  getCurrentMedUser(): Observable<MedUser> {
    return this.getCurrentUserData().pipe(
      map(account => account.user)
    );
  }

  getCurrentUserData(): Observable<Account> {
    return this.accountApi.getCurrent({include: 'user'})
      .pipe(
        tap((account => this.auth.setUser(account)))
      );
  }
}
