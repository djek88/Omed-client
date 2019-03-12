import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../shared';
import { FormUtilitiesService } from '../../core';

@Component({
  selector: 'omed-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  resetPasswordForm: FormGroup;

  formSubmitted = false;
  errMessage: string;
  sendedSuccessfully = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private formUtils: FormUtilitiesService
  ) {
    this.createForm();
  }

  ngOnInit() {
  }

  onSubmit() {
    if (this.resetPasswordForm.invalid) {
      return this.formUtils.showTips(this.resetPasswordForm.controls);
    }

    this.formSubmitted = true;
    this.errMessage = '';

    const email = this.resetPasswordForm.get('email').value;

    this.authService.resetPasswordRequest(email)
      .subscribe(() => {
        this.sendedSuccessfully = true;
      }, (err) => {
        if (err.code === 'EMAIL_NOT_FOUND') {
          this.formSubmitted = false;
          this.errMessage = 'We do not recognize this e-mail';
          this.resetPasswordForm.get('email').setValue('');
          this.formUtils.showTips(this.resetPasswordForm.controls);
        }
      });
  }

  private createForm() {
    this.resetPasswordForm = this.fb.group({
      email: ['', Validators.compose([
        Validators.email,
        Validators.required
      ])]
    });
  }
}
