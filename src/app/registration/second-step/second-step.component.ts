import { Component, OnInit }                  from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { ActivatedRoute, Router }             from '@angular/router';

import { Lists }                       from './second-step-lists-resolver.service';
import { SignUpService, DegreeGroups } from '../shared/sign-up.service';
import { FormUtilitiesService }        from '../../core/form-utilities.service';

import { MedUser, City, Specialty, University, Hospital } from '../../shared/sdk';

@Component({
  selector: 'omed-second-step',
  templateUrl: './second-step.component.html',
  styleUrls: ['./second-step.component.css']
})
export class SecondStepComponent implements OnInit {
  signUpForm: FormGroup;
  minDate: string;
  maxDate: string;
  genderOpts: string[];
  cityOpts: City[];
  specialtyOpts: Specialty[];
  universityOpts: University[];
  hospitalOpts: Hospital[];
  degreeGroups: DegreeGroups[];

  formSubmitted: boolean = false;

  private medUser: MedUser;
  private hospitals: Hospital[];

  constructor(
    private fb: FormBuilder,
    private signUpService: SignUpService,
    private formUtils: FormUtilitiesService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.minDate = this.formUtils.dateToString(-90);
    this.maxDate = this.formUtils.dateToString(-18);
    this.genderOpts = this.signUpService.getGenders();

    this.createForm();
  }

  ngOnInit() {
    this.route.data
      .subscribe((data: { medUser: MedUser, lists: Lists }) => {
        this.cityOpts = data.lists.cities;
        this.specialtyOpts = data.lists.specialties;
        this.universityOpts = data.lists.universities;
        this.hospitalOpts = data.lists.hospitals;
        this.degreeGroups = this.signUpService.getDegreeGroupsFor(data.medUser);

        this.hospitals = data.lists.hospitals.slice();
        this.medUser = data.medUser;
      });
  }

  onSubmit() {
    if (this.signUpForm.invalid) {
      return this.formUtils.showTips(this.signUpForm.controls);
    }

    this.formSubmitted = true;

    const medUserData = this.prepareMedUserData();

    this.signUpService.registrateSecondStep(this.medUser.id, medUserData)
      .subscribe(() => {
        this.router.navigate(['step-3'], { relativeTo: this.route.parent });
      });
  }

  private prepareMedUserData() {
    const formModel = this.signUpForm.value;

    const data: any = {
      birthday: formModel.birthday,
      sex: formModel.sex,
      cityId: formModel.city,
      degree: formModel.degree,
      military: formModel.military,
      private: false
    };

    if (formModel.specialty) {
      data.specialtyId = formModel.specialty;
    }

    if (formModel.hospital) {
      const hospital = this.hospitals.filter((h) => h.id === formModel.hospital)[0];

      if (hospital) {
        data.hospitalId = hospital.id;
        data.private = hospital.private;
      } else {
        data.private = formModel.hospital === 'private';
      }
    }

    if (formModel.university) {
      data.universityId = formModel.university;
      data.private = this.universityOpts.filter((u) => u.id === formModel.university)[0].private;
    }

    return data;
  }

  private createForm() {
    this.signUpForm = this.fb.group({
      birthday: ['', Validators.required],
      sex: ['', Validators.required],
      city: ['', Validators.required],
      degree: ['', Validators.required],
      university: '',
      hospital: '',
      specialty: '',
      military: false
    });

    this.signUpForm.controls.degree.valueChanges.subscribe(this.configureControlsByDegree.bind(this));
    this.configureControlsByDegree();
  }

  private configureControlsByDegree(degree?: string) {
    this.resetDisableControls();

    if (!degree || !this.medUser) return;

    const userType = this.signUpService.getUserType(this.medUser);
    const types = this.signUpService.getTypes();

    switch (userType) {
      // student
      case types[0]:
        this.configureControlsForStudent();
        break;
      // resident
      case types[1]:
        this.configureControlsForResident();
        break;
      // doctor
      case types[2]:
        this.configureControlsForDoctor();
        break;
    }
  }

  private configureControlsForStudent() {
    const ctrls = this.signUpForm.controls;
    const isIntern = this.signUpService.isDegreeOfIntern(ctrls.degree.value);

    this.setAsRequiredControl(ctrls.university);

    if (isIntern) {
      this.setAsRequiredControl(ctrls.hospital);
    }
  }

  private configureControlsForResident() {
    const ctrls = this.signUpForm.controls;

    ctrls.university.enable();
    this.setAsRequiredControl(ctrls.hospital);
    this.setAsRequiredControl(ctrls.specialty);
  }

  private configureControlsForDoctor() {
    const ctrls = this.signUpForm.controls;
    const isRegular = this.signUpService.isDegreeOfRegular(ctrls.degree.value);
    const isProfessor = this.signUpService.isDegreeOfProfessor(ctrls.degree.value);

    ctrls.hospital.enable();
    this.configureHospitalOptsForDoctor();

    if (isRegular || isProfessor) {
      this.setAsRequiredControl(ctrls.specialty);
    }

    if (isProfessor) {
      ctrls.university.enable();
    }
  }

  private configureHospitalOptsForDoctor() {
    this.hospitalOpts = this.hospitals.slice();
    this.hospitalOpts.unshift({ id: 'private', name: 'Private sector' } as Hospital);
    this.hospitalOpts.push({ id: 'public', name: 'Other public hospital' } as Hospital);
  }

  private setAsRequiredControl(control: AbstractControl) {
    control.enable();
    control.setValidators(Validators.required);
    control.updateValueAndValidity();
  }

  private resetDisableControls() {
    this.signUpForm.controls.university.disable();
    this.signUpForm.controls.hospital.disable();
    this.signUpForm.controls.specialty.disable();
    this.signUpForm.controls.university.reset('');
    this.signUpForm.controls.hospital.reset('');
    this.signUpForm.controls.specialty.reset('');
  }
}
