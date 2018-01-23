import { Injectable }                                           from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { forkJoin }   from "rxjs/observable/forkJoin";

import { City, Specialty, University, Hospital,
         CityApi, SpecialtyApi, UniversityApi, HospitalApi } from '../../shared/sdk';

export interface Lists {
  cities: [City],
  specialties: [Specialty],
  universities: [University],
  hospitals: [Hospital]
}

@Injectable()
export class SecondStepListsResolver implements Resolve<Lists>{
  constructor(
    private cityApi: CityApi,
    private specialtyApi: SpecialtyApi,
    private universityApi: UniversityApi,
    private hospitalApi: HospitalApi) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Lists> {
    const combined = forkJoin(
      this.cityApi.find(),
      this.specialtyApi.find(),
      this.universityApi.find(),
      this.hospitalApi.find(),
    );

    return combined.map(results => {
      return {
        cities: results[0],
        specialties: results[1],
        universities: results[2],
        hospitals: results[3]
      } as Lists;
    });
  }
}