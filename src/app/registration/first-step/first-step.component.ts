import { Component, OnInit }                  from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute }             from '@angular/router';

import { Account, MedUser, AccountApi } from '../../shared/sdk';
import { SignUpService }                from '../shared/sign-up.service';
import { TextMasksService }             from '../../core/text-masks.service';

@Component({
  selector: 'omed-first-step',
  templateUrl: './first-step.component.html',
  styleUrls: ['./first-step.component.css']
})
export class FirstStepComponent implements OnInit {
  signUpForm: FormGroup;
  types: string[];
  areas: string[];

  formSubmitted = false;

  constructor(
    private fb: FormBuilder,
    private signUpService: SignUpService,
    public textMasks: TextMasksService,
    public accountApi: AccountApi,
    public router: Router,
    public route: ActivatedRoute
  ) {
    this.types = this.signUpService.getTypes();
    this.areas = this.signUpService.getAreas();

    this.createForm();
  }

  ngOnInit() { }

  onSubmit() {
    if (this.signUpForm.invalid) {
      this.showTips();
      return;
    }

    this.formSubmitted = true;

    const medUser = this.prepareMedUserData();
    const account = this.prepareAccountData();

    this.signUpService.registrateFirstStep(account, medUser)
      .subscribe(() => {
        this.accountApi.login(account, 'user', true)
          .subscribe(() => {
            this.router.navigate(['step-2'], { relativeTo: this.route.parent })
          });
      });
  }

  private prepareMedUserData() {
    const formModel = this.signUpForm.value;

    let medUserType = formModel.type;
    let medUserDegree = this.signUpService.getDefaultDegreeFor(medUserType);

    // if selected "Resident"
    if (medUserType === this.types[1]) {
      medUserType = this.types[0]; // set student type
    }

    return new MedUser({
      type: medUserType,
      degree: medUserDegree,
      area: formModel.area,
      firstName: formModel.firstName,
      lastName: formModel.lastName,
      phones: [formModel.phone],
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

    for (let control in ctrls) {
      if (ctrls.hasOwnProperty(control)) {
        ctrls[control].markAsDirty();
        ctrls[control].markAsTouched();
      } 
    }
  }

  private createForm() {
    this.signUpForm = this.fb.group({
      type: ['', Validators.required],
      area: ['', Validators.required],
      firstName: ['', Validators.compose([
        Validators.pattern('[a-zA-Z]{2,30}'),
        Validators.required
      ])],
      lastName: ['', Validators.compose([
        Validators.pattern('[a-zA-Z]{2,30}'),
        Validators.required
      ])],
      email: ['', Validators.compose([
        Validators.email,
        Validators.required
      ])],
      phone: ['', Validators.compose([
        Validators.pattern(this.textMasks.phoneMaskRegExp),
        Validators.required
      ])],
      password: ['', Validators.required]
    });

    this.signUpForm.valueChanges.subscribe(formModel => {
      formModel.phone = this.textMasks.unmask(formModel.phone);
    });
  }
}
