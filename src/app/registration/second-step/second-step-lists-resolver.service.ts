import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

import { Observable, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';

import { City, Specialty, University, Hospital,
         CityApi, SpecialtyApi, UniversityApi, HospitalApi } from '../../core/sdk';

export declare interface Lists {
  cities: City[];
  specialties: Specialty[];
  universities: University[];
  hospitals: Hospital[];
}

@Injectable()
export class SecondStepListsResolver implements Resolve<Lists> {
  constructor(
    private cityApi: CityApi,
    private specialtyApi: SpecialtyApi,
    private universityApi: UniversityApi,
    private hospitalApi: HospitalApi) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Lists> {
    return forkJoin(
      this.cityApi.find(),
      this.specialtyApi.find(),
      this.universityApi.find(),
      this.hospitalApi.find(),
    ).pipe(
      map(([cities, specialties, universities, hospitals]) => {
        return {
          cities,
          specialties,
          universities,
          hospitals
        } as Lists;
      })
    );
  }
}
