import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/mergeMap';

import { Account, MedUser,
  AccountApi, MedUserApi } from '../../shared/sdk';

import { environment } from '../../../environments/environment';

export interface Degree {
  name: string;
  value: string;
}

export interface DegreeGroups {
  name: string,
  degrees: Degree[]
}

@Injectable()
export class SignUpService {
  private types: string[] = ['student', 'resident', 'doctor'];
  private areas: string[] = ['medical', 'dental'];
  private genders: string[] = ['male', 'female'];

  private studentDegrees: Degree[] = [
    { name: '1 year', value: '1' },
    { name: '2 year', value: '2' },
    { name: '3 year', value: '3' },
    { name: '4 year', value: '4' },
    { name: '5 year', value: '5' },
    { name: '6 year', value: '6' },
    { name: '7 year', value: '7' },
    { name: '8 year', value: '8' }
  ];
  private internDegrees: Degree[] = [
    { name: 'Intern 1 year', value: 'intern1' },
    { name: 'Intern 2 year', value: 'intern2'}
  ];
  private residentDegrees: Degree[] = [
    { name: 'Resident 1 year', value: 'resident1'},
    { name: 'Resident 2 year', value: 'resident2'},
    { name: 'Resident 3 year', value: 'resident3'},
    { name: 'Resident 4 year', value: 'resident4'},
    { name: 'Resident 5 year', value: 'resident5'}
  ];
  private doctorDegrees: Degree[] = [
    { name: 'Generalist', value: 'generalist' },
    { name: 'Regular', value: 'regular' }
  ];
  private professorDegrees: Degree[] = [
    { name: 'Assistant', value: 'assistant' },
    { name: 'Agrege', value: 'agrege' },
    { name: 'E.S', value: 'es '}
  ];

  private studentTypeDegreeGroups: DegreeGroups[] = [
    { name: 'Student', degrees: this.studentDegrees },
    { name: 'Intern', degrees: this.internDegrees }
  ];
  private residentTypeDegreeGroups: DegreeGroups[] = [
    { name: 'Resident', degrees: this.residentDegrees }
  ];
  private doctorTypeDegreeGroups: DegreeGroups[] = [
    { name: 'Doctor', degrees: this.doctorDegrees },
    { name: 'Professor', degrees: this.professorDegrees }
  ];

  constructor(
    private http: Http,
    private accountApi: AccountApi,
    private medUserApi: MedUserApi) { }

  registrateFirstStep(account: Account, medUser: MedUser): Observable<Account> {
    return this.medUserApi.create(medUser)
      .flatMap((medUser: MedUser) => this.medUserApi.createAccount(medUser.id, account));
  }

  registrateSecondStep(id, data): Observable<any> {
    return this.medUserApi.patchAttributes(id, data);
  }

  registrateThirdStep(id, data): Observable<any> {
    const url = `${environment.apiBaseUrl}/${environment.apiVersion}/MedUsers/${id}/upload-med-document`;
    const headers = new Headers();
    this.medUserApi.authenticate(url, headers);

    const fd = new FormData();
    fd.append('file', data.file);

    return this.http.post(url, fd, { headers })
      .flatMap(() => this.medUserApi.patchAttributes(id, { moreProof: false }));
  }

  getTypes() {
    return this.types;
  }

  isDegreeOfIntern(degree: string) {
    return this.internDegrees.map((i) => i.value).indexOf(degree) !== -1;
  }

  isDegreeOfRegular(degree: string) {
    return this.doctorDegrees[1].value === degree;
  }

  isDegreeOfProfessor(degree: string) {
    return this.professorDegrees.map((i) => i.value).indexOf(degree) !== -1;
  }

  getAreas() {
    return this.areas;
  }

  getGenders() {
    return this.genders;
  }

  getDefaultDegreeFor(userType: string) {
    switch (userType) {
      case this.types[0]:
        return this.studentDegrees[0].value;
      case this.types[1]:
        return this.residentDegrees[0].value;
      case this.types[2]:
        return this.doctorDegrees[0].value;
    }
  }

  getDegreeGroupsFor(user: MedUser) {
    const userType = this.getUserType(user);

    switch (userType) {
      case this.types[0]:
        return this.studentTypeDegreeGroups;
      case this.types[1]:
        return this.residentTypeDegreeGroups;
      case this.types[2]:
        return this.doctorTypeDegreeGroups;
    }
  }

  getUserType(user: MedUser) {
    const residentDegrees = this.getDegreesValues(this.residentDegrees);
    const isStudent = user.type === this.types[0];
    const isResident = isStudent && residentDegrees.indexOf(user.degree) !== -1;
    const isDoctor = user.type === this.types[2];

    if (isResident) return this.types[1];
    if (isStudent) return this.types[0];
    if (isDoctor) return this.types[2];
  }

  private getDegreesValues(degrees: Degree[]) {
    return degrees.map((d) => d.value);
  }
}
