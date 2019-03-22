import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Account, MedUser, MedUserApi } from '../../shared/sdk';

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

export enum UserType {
  STUDENT = 'student',
  RESIDENT = 'resident',
  DOCTOR = 'doctor',
}

export enum UserArea {
  MEDICAL = 'medical',
  DENTAL = 'dental',
}

export enum UserGender {
  MALE = 'male',
  FEMALE = 'female',
}

const studentDegrees: Degree[] = [
  { name: '1 year', value: '1' },
  { name: '2 year', value: '2' },
  { name: '3 year', value: '3' },
  { name: '4 year', value: '4' },
  { name: '5 year', value: '5' },
  { name: '6 year', value: '6' },
  { name: '7 year', value: '7' },
  { name: '8 year', value: '8' }
];
const internDegrees: Degree[] = [
  { name: 'Intern 1 year', value: 'intern1' },
  { name: 'Intern 2 year', value: 'intern2' }
];
const residentDegrees: Degree[] = [
  { name: 'Resident 1 year', value: 'resident1' },
  { name: 'Resident 2 year', value: 'resident2' },
  { name: 'Resident 3 year', value: 'resident3' },
  { name: 'Resident 4 year', value: 'resident4' },
  { name: 'Resident 5 year', value: 'resident5' }
];
const doctorDegrees: Degree[] = [
  { name: 'Generalist', value: 'generalist' },
  { name: 'Regular', value: 'regular' }
];
const professorDegrees: Degree[] = [
  { name: 'Assistant', value: 'assistant' },
  { name: 'Agrege', value: 'agrege' },
  { name: 'E.S', value: 'es '}
];
const studentTypeDegreeGroups: DegreeGroups[] = [
  { name: 'Student', degrees: studentDegrees },
  { name: 'Intern', degrees: internDegrees }
];
const residentTypeDegreeGroups: DegreeGroups[] = [
  { name: 'Resident', degrees: residentDegrees }
];
const doctorTypeDegreeGroups: DegreeGroups[] = [
  { name: 'Doctor', degrees: doctorDegrees },
  { name: 'Professor', degrees: professorDegrees }
];

@Injectable()
export class SignUpService {
  readonly userTypes = Object.values(UserType);
  readonly areas = Object.values(UserArea);
  readonly genders = Object.values(UserGender);

  private studentDegrees = studentDegrees;
  private internDegrees = internDegrees;
  private residentDegrees = residentDegrees;
  private doctorDegrees = doctorDegrees;
  private professorDegrees = professorDegrees;

  private studentTypeDegreeGroups = studentTypeDegreeGroups;
  private residentTypeDegreeGroups = residentTypeDegreeGroups;
  private doctorTypeDegreeGroups = doctorTypeDegreeGroups;

  constructor(
    private http: HttpClient,
    private medUserApi: MedUserApi,
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
    return this.internDegrees.map((i) => i.value).indexOf(degree) !== -1;
  }

  isDegreeOfRegular(degree: string) {
    return this.doctorDegrees[1].value === degree;
  }

  isDegreeOfProfessor(degree: string) {
    return this.professorDegrees.map((i) => i.value).indexOf(degree) !== -1;
  }

  getDefaultDegreeFor(userType: string) {
    switch (userType) {
      case UserType.STUDENT:
        return this.studentDegrees[0].value;
      case UserType.RESIDENT:
        return this.residentDegrees[0].value;
      case UserType.DOCTOR:
        return this.doctorDegrees[0].value;
    }
  }

  getDegreeGroupsFor(user: MedUser) {
    const userType = this.getUserType(user);

    switch (userType) {
      case UserType.STUDENT:
        return this.studentTypeDegreeGroups;
      case UserType.RESIDENT:
        return this.residentTypeDegreeGroups;
      case UserType.DOCTOR:
        return this.doctorTypeDegreeGroups;
    }
  }

  getUserType(user: MedUser) {
    const residentDegreesValues = this.getDegreesValues(this.residentDegrees);
    const isStudent = user.type === UserType.STUDENT;
    const isResident = isStudent && residentDegreesValues.indexOf(user.degree) !== -1;
    const isDoctor = user.type === UserType.DOCTOR;

    if (isResident) {
      return UserType.RESIDENT;
    } else if (isStudent) {
      return UserType.STUDENT;
    } else if (isDoctor) {
      return UserType.DOCTOR;
    }
  }

  private getDegreesValues(degrees: Degree[]) {
    return degrees.map((d) => d.value);
  }
}
