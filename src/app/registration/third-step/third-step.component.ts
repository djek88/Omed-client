import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { SignUpService, USER_TYPE } from '../shared/sign-up.service';

import { MedUser } from '../../shared/sdk';

@Component({
  selector: 'omed-third-step',
  templateUrl: './third-step.component.html',
  styleUrls: ['./third-step.component.css']
})
export class ThirdStepComponent implements OnInit {
  signUpForm: FormGroup;
  documentTypeName: string;

  private medUser: MedUser;
  private medDocumentConfigurations: any;

  constructor(
    private fb: FormBuilder,
    private signUpService: SignUpService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.initializeForm();
  }

  ngOnInit() {
    this.route.data
      .subscribe((data: {medUser: MedUser, medDocumentConfigurations: any}) => {
        this.medUser = data.medUser;
        this.medDocumentConfigurations = data.medDocumentConfigurations;

        const userType = this.signUpService.getUserType(this.medUser);
        switch (userType) {
          case USER_TYPE.STUDENT:
            this.documentTypeName = 'student card';
            break;
          case USER_TYPE.RESIDENT:
            this.documentTypeName = 'badge/diploma/stamp';
            break;
          case USER_TYPE.DOCTOR:
            this.documentTypeName = 'diploma/stamp';
            break;
        }
      });
  }

  onSubmit() {
    if (this.signUpForm.invalid) {
      return;
    }

    const data = {
      file: this.signUpForm.get('file').value
    };

    this.signUpService.registrateThirdStep(this.medUser.id, data)
      .subscribe(() => {
        this.router.navigate(['finish'], { relativeTo: this.route.parent });
      });
  }

  onFileChange(event) {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];

      if (this.validateFile(file)) {
        this.signUpForm.setValue({ file });
      }
    }
  }

  private initializeForm() {
    this.signUpForm = this.fb.group({
      file: [null, Validators.required]
    });
  }

  private validateFile(file: any) {
    const maxFileSize = this.medDocumentConfigurations.maxSize;
    if (file.size < maxFileSize) {
      return false;
    }

    const supportedTypes = [];
    for (const key in this.medDocumentConfigurations.supportedTypes) {
      if (this.medDocumentConfigurations.supportedTypes.hasOwnProperty(key)) {
        supportedTypes.push(this.medDocumentConfigurations.supportedTypes[key]);
      }
    }

    if (supportedTypes.indexOf(file.type) === -1) {
      return false;
    }

    return true;
  }
}
