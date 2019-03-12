import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

import { Observable } from 'rxjs';

import { AdditionalApi } from '../../shared/sdk';

@Injectable()
export class MedDocumentConfigurationsResolver implements Resolve<any> {
  constructor(private additionalApi: AdditionalApi) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.additionalApi.medDocumentConfigurations();
  }
}
