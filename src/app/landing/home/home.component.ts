import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../../login';
import { FormUtilitiesService } from '../../core';

@Component({
  selector: 'omed-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  signInForm: FormGroup;

  formSubmitted = false;
  lastSignedInCredentials: any;
  shortLanding: boolean;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private formUtils: FormUtilitiesService
  ) {
    this.createForm();
  }

  ngOnInit() {
    this.shortLanding = this.authService.isHasSignedIn();
    this.lastSignedInCredentials = this.authService.getLastSignedInUserData();

    if (this.lastSignedInCredentials && this.lastSignedInCredentials.email) {
      this.signInForm.get('email').setValue(this.lastSignedInCredentials.email);
    }
  }

  onSubmit() {
    if (this.signInForm.invalid) {
      return this.formUtils.showTips(this.signInForm.controls);
    }

    this.formSubmitted = true;

    const rememberMe = this.signInForm.get('rememberMe').value;
    const credentials = {
      email: this.signInForm.get('email').value,
      password: this.signInForm.get('password').value
    };

    this.authService.login(credentials, rememberMe)
      .subscribe(() => {
        this.authService.markAsHasSignedIn();

        this.authService.afterLoginRedirect();
      });
  }

  deleteLastSignedIn() {
    this.lastSignedInCredentials = null;
    this.signInForm.get('email').setValue('');
    this.authService.deleteLastSignedInUserData();
  }

  private createForm() {
    this.signInForm = this.fb.group({
      email: ['', Validators.compose([
        Validators.email,
        Validators.required
      ])],
      password: ['', Validators.required],
      rememberMe: false
    });
  }
}
