import { Component, OnInit }                  from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute }             from '@angular/router';

import { AuthService }                        from '../auth.service';

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
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService
  ) {
    this.createForm();
  }

  ngOnInit() {
  }

  onSubmit() {
    if (this.signInForm.invalid) return this.showTips();

    this.formSubmitted = true;

    const credentials = {
      email: this.signInForm.get('email').value,
      password: this.signInForm.get('password').value
    };

    this.authService.login(credentials)
      .subscribe(() => {
        //this.router.navigate(['']);
      });
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

  private showTips() {
    const ctrls = this.signInForm.controls;

    for (let control in ctrls) {
      if (ctrls.hasOwnProperty(control)) {
        ctrls[control].markAsDirty();
        ctrls[control].markAsTouched();
      } 
    }
  }
}
