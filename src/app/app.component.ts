import { Component } from '@angular/core';

import { LoopBackConfig } from './shared/sdk/index';
import { environment } from '../environments/environment';

import { AccountApi, MedUserApi } from './shared/sdk/services'
import { Account, MedUser, AccessToken } from './shared/sdk/models'

import 'rxjs/add/operator/mergeMap';

@Component({
  selector: 'omed-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'omed';

  constructor(
    private accountApi: AccountApi,
    private medUserApi: MedUserApi
  ) {
    LoopBackConfig.setBaseURL(environment.apiBaseUrl);
    LoopBackConfig.setApiVersion(environment.apiVersion);

    const medUser = new MedUser({
      firstName: 'first',
      lastName: 'last',
      phones: ['88888'],
      birthday: new Date(),
      medDocuments: ['document']
    });
    const account = new Account({
      email: `test@test${Math.random()}.test`,
      password: 'test'
    });

    this.medUserApi.create(medUser)
      .flatMap((medUser: MedUser) => this.medUserApi.createAccount(medUser.id, account))
      .flatMap((account: Account) => this.accountApi.findById(account.id, {include: 'user'}))
      .subscribe((foundedAccount: Account) => console.log(foundedAccount));
  }
}
