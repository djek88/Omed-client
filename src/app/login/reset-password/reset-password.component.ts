import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService }                        from '../auth.service';

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
    private authService: AuthService
  ) {
    this.createForm();
  }

  ngOnInit() {
  }

  onSubmit() {
    if (this.resetPasswordForm.invalid) return this.showTips();

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
          this.showTips();
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

  private showTips() {
    const ctrls = this.resetPasswordForm.controls;

    for (let control in ctrls) {
      if (ctrls.hasOwnProperty(control)) {
        ctrls[control].markAsDirty();
        ctrls[control].markAsTouched();
      } 
    }
  }
}
