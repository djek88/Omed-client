import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Account, MedUser } from '../../shared/sdk';
import { AuthService } from '../../login';
import { SignUpService, USER_TYPE } from '../shared/sign-up.service';
import { TextMasksService } from '../../core';
import { switchMap } from 'rxjs/operators';
import { interval } from 'rxjs';

@Component({
  selector: 'omed-first-step',
  templateUrl: './first-step.component.html',
  styleUrls: ['./first-step.component.css']
})
export class FirstStepComponent implements OnInit {
  signUpForm: FormGroup;
  userTypeOpts: string[];
  areaOpts: string[];

  formSubmitted = false;

  constructor(
    public textMasks: TextMasksService,
    private fb: FormBuilder,
    private signUpService: SignUpService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.userTypeOpts = this.signUpService.USER_TYPES;
    this.areaOpts = this.signUpService.AREAS;

    this.initializeForm();
  }

  ngOnInit() {}

  onSubmit() {
    if (this.signUpForm.invalid) {
      return this.showTips();
    }

    this.formSubmitted = true;

    const medUser = this.prepareMedUserData();
    const account = this.prepareAccountData();

    this.signUpService.registrateFirstStep(account, medUser)
      .pipe(
        switchMap(() => this.authService.login(account))
      )
      .subscribe(() => this.router.navigate(['step-2'], { relativeTo: this.route.parent }));
  }

  private prepareMedUserData() {
    const formModel = this.signUpForm.value;

    let medUserType = formModel.type;
    const medUserDegree = this.signUpService.getDefaultDegreeFor(medUserType);

    if (medUserType === USER_TYPE.RESIDENT) {
      medUserType = USER_TYPE.STUDENT;
    }

    return new MedUser({
      type: medUserType,
      degree: medUserDegree,
      area: formModel.area,
      firstName: formModel.firstName,
      lastName: formModel.lastName,
      phones: [this.textMasks.unmask(formModel.phone)],
    });
  }

  private prepareAccountData() {
    return new Account({
      email: this.signUpForm.value.email,
      password: this.signUpForm.value.password
    });
  }

  private showTips() {
    const ctrls = this.signUpForm.controls;

    for (const control in ctrls) {
      if (ctrls.hasOwnProperty(control)) {
        ctrls[control].markAsDirty();
        ctrls[control].markAsTouched();
      }
    }
  }

  private initializeForm() {
    this.signUpForm = this.fb.group({
      type: ['', Validators.required],
      area: ['', Validators.required],
      firstName: ['', [
        Validators.pattern('[a-zA-Z]{2,30}'),
        Validators.required
      ]],
      lastName: ['', [
        Validators.pattern('[a-zA-Z]{2,30}'),
        Validators.required
      ]],
      email: ['', [
        Validators.email,
        Validators.required
      ]],
      phone: ['', [
        Validators.required,
        Validators.pattern(this.textMasks.phoneMaskRegExp)
      ]],
      password: ['', Validators.required]
    });
  }
}
