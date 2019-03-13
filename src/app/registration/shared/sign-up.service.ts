import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Account, MedUser, AccountApi, MedUserApi } from '../../shared/sdk';

import { environment } from '../../../environments/environment';
import { switchMap } from 'rxjs/operators';

export declare interface Degree {
  name: string;
  value: string;
}

export declare interface DegreeGroups {
  name: string;
  degrees: Degree[];
}

export enum USER_TYPE {
  STUDENT = 'student',
  RESIDENT = 'resident',
  DOCTOR = 'doctor',
}

export enum USER_AREA {
  MEDICAL = 'medical',
  DENTAL = 'dental',
}

export enum USER_GENDER {
  MALE = 'male',
  FEMALE = 'female',
}

const STUDENT_DEGREES: Degree[] = [
  { name: '1 year', value: '1' },
  { name: '2 year', value: '2' },
  { name: '3 year', value: '3' },
  { name: '4 year', value: '4' },
  { name: '5 year', value: '5' },
  { name: '6 year', value: '6' },
  { name: '7 year', value: '7' },
  { name: '8 year', value: '8' }
];
const INTERN_DEGREES: Degree[] = [
  { name: 'Intern 1 year', value: 'intern1' },
  { name: 'Intern 2 year', value: 'intern2' }
];
const RESIDENT_DEGREES: Degree[] = [
  { name: 'Resident 1 year', value: 'resident1' },
  { name: 'Resident 2 year', value: 'resident2' },
  { name: 'Resident 3 year', value: 'resident3' },
  { name: 'Resident 4 year', value: 'resident4' },
  { name: 'Resident 5 year', value: 'resident5' }
];
const DOCTOR_DEGREES: Degree[] = [
  { name: 'Generalist', value: 'generalist' },
  { name: 'Regular', value: 'regular' }
];
const PROFESSOR_DEGREE: Degree[] = [
  { name: 'Assistant', value: 'assistant' },
  { name: 'Agrege', value: 'agrege' },
  { name: 'E.S', value: 'es '}
];
const STUDENT_TYPE_DEGREE_GROUPS: DegreeGroups[] = [
  { name: 'Student', degrees: STUDENT_DEGREES },
  { name: 'Intern', degrees: INTERN_DEGREES }
];
const RESIDENT_TYPE_DEGREE_GROUPS: DegreeGroups[] = [
  { name: 'Resident', degrees: RESIDENT_DEGREES }
];
const DOCTOR_TYPE_DEGREE_GROUPS: DegreeGroups[] = [
  { name: 'Doctor', degrees: DOCTOR_DEGREES },
  { name: 'Professor', degrees: PROFESSOR_DEGREE }
];

@Injectable()
export class SignUpService {
  readonly USER_TYPES = Object.values(USER_TYPE);
  readonly AREAS = Object.values(USER_AREA);
  readonly GENDERS = Object.values(USER_GENDER);

  private STUDENT_DEGREES = STUDENT_DEGREES;
  private INTERN_DEGREES = INTERN_DEGREES;
  private RESIDENT_DEGREES = RESIDENT_DEGREES;
  private DOCTOR_DEGREES = DOCTOR_DEGREES;
  private PROFESSOR_DEGREES = PROFESSOR_DEGREE;

  private STUDENT_TYPE_DEGREE_GROUPS = STUDENT_TYPE_DEGREE_GROUPS;
  private RESIDENT_TYPE_DEGREE_GROUPS = RESIDENT_TYPE_DEGREE_GROUPS;
  private DOCTOR_TYPE_DEGREE_GROUPS = DOCTOR_TYPE_DEGREE_GROUPS;

  constructor(
    private http: HttpClient,
    private accountApi: AccountApi,
    private medUserApi: MedUserApi
  ) {}

  registrateFirstStep(account: Account, medUserToCreate: MedUser): Observable<Account> {
    return this.medUserApi.create(medUserToCreate).pipe(
      switchMap(medUser => this.medUserApi.createAccount(medUser.id, account))
    );
  }

  registrateSecondStep(id, data): Observable<any> {
    return this.medUserApi.patchAttributes(id, data);
  }

  registrateThirdStep(id, data): Observable<any> {
    const url = `${environment.apiBaseUrl}/${environment.apiVersion}/MedUsers/${id}/upload-med-document`;
    const headers = new HttpHeaders();
    this.medUserApi.authenticate(url, headers);

    const fd = new FormData();
    fd.append('file', data.file);

    return this.http.post(url, fd, { headers }).pipe(
      switchMap(() => this.medUserApi.patchAttributes(id, { moreProof: false }))
    );
  }

  isDegreeOfIntern(degree: string) {
    return this.INTERN_DEGREES.map((i) => i.value).indexOf(degree) !== -1;
  }

  isDegreeOfRegular(degree: string) {
    return this.DOCTOR_DEGREES[1].value === degree;
  }

  isDegreeOfProfessor(degree: string) {
    return this.PROFESSOR_DEGREES.map((i) => i.value).indexOf(degree) !== -1;
  }

  getDefaultDegreeFor(userType: string) {
    switch (userType) {
      case USER_TYPE.STUDENT:
        return this.STUDENT_DEGREES[0].value;
      case USER_TYPE.RESIDENT:
        return this.RESIDENT_DEGREES[0].value;
      case USER_TYPE.DOCTOR:
        return this.DOCTOR_DEGREES[0].value;
    }
  }

  getDegreeGroupsFor(user: MedUser) {
    const userType = this.getUserType(user);

    switch (userType) {
      case USER_TYPE.STUDENT:
        return this.STUDENT_TYPE_DEGREE_GROUPS;
      case USER_TYPE.RESIDENT:
        return this.RESIDENT_TYPE_DEGREE_GROUPS;
      case USER_TYPE.DOCTOR:
        return this.DOCTOR_TYPE_DEGREE_GROUPS;
    }
  }

  getUserType(user: MedUser) {
    const residentDegrees = this.getDegreesValues(this.RESIDENT_DEGREES);
    const isStudent = user.type === USER_TYPE.STUDENT;
    const isResident = isStudent && residentDegrees.indexOf(user.degree) !== -1;
    const isDoctor = user.type === USER_TYPE.DOCTOR;

    if (isResident) {
      return USER_TYPE.RESIDENT;
    } else if (isStudent) {
      return USER_TYPE.STUDENT;
    } else if (isDoctor) {
      return USER_TYPE.DOCTOR;
    }
  }

  private getDegreesValues(degrees: Degree[]) {
    return degrees.map((d) => d.value);
  }
}
