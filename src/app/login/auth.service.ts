import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { LoopBackConfig, LoopBackAuth, AccountApi, Account, MedUser } from '../shared/sdk';

@Injectable()
export class AuthService {
  redirectUrl: string;

  constructor(
    private auth: LoopBackAuth,
    private accountApi: AccountApi
  ) { }

  isLoggedIn() {
    return this.accountApi.isAuthenticated();
  }

  login(credentials: any, rememeberMe?: boolean) {
    return this.accountApi.login(credentials, 'user', rememeberMe);

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

  getCurrentMedUser(): Observable<MedUser> {
    return this.accountApi.getUser(this.auth.getCurrentUserId());
  }
}
