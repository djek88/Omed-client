import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../shared';
import { FormUtilitiesService } from '../../core';

@Component({
  selector: 'omed-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  signInForm: FormGroup;

  formSubmitted = false;

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
    if (this.signInForm.invalid) {
      return this.formUtils.showTips(this.signInForm.controls);
    }

    this.formSubmitted = true;

    const credentials = {
      email: this.signInForm.get('email').value,
      password: this.signInForm.get('password').value
    };

    this.authService.login(credentials)
      .subscribe(() => this.authService.afterLoginRedirect());
  }

  private createForm() {
    this.signInForm = this.fb.group({
      email: ['', Validators.compose([
        Validators.email,
        Validators.required
      ])],
      password: ['', Validators.required]
    });
  }
}
