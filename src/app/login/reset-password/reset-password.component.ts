import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute }             from '@angular/router';

import { AuthService }                        from '../auth.service';

@Component({
  selector: 'omed-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  resetPasswordForm: FormGroup;

  formSubmitted = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService
  ) {
    this.createForm();
  }

  ngOnInit() {
  }

  onSubmit() {
    if (this.resetPasswordForm.invalid) return this.showTips();

    this.formSubmitted = true;

    console.log('submitted');
    return;

    /*const credentials = {
      email: this.resetPasswordForm.get('email').value,
      password: this.resetPasswordForm.get('password').value
    };

    this.authService.login(credentials)
      .subscribe(() => {
        //this.router.navigate(['']);
      });*/
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
