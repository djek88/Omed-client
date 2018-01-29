import { Component, OnInit }                  from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router }   from '@angular/router';

import { AuthService }                        from '../auth.service';

@Component({
  selector: 'omed-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  changePasswordForm: FormGroup;

  formSubmitted = false;
  changedSuccessfully = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService
  ) {
    this.createForm();
  }

  ngOnInit() {
  }

  onSubmit() {
    if (this.changePasswordForm.invalid) return this.showTips();

    this.formSubmitted = true;

    const newPassword = this.changePasswordForm.get('password').value;
    const accessTokenId = this.route.snapshot.paramMap.get('accessToken');

    this.authService.setPassword(newPassword, accessTokenId)
      .subscribe(() => {
        this.changedSuccessfully = true;
      }, (err) => {
        this.router.navigate(['/login'])
      });
  }

  private createForm() {
    this.changePasswordForm = this.fb.group({
      password: ['', Validators.required]
    });
  }

  private showTips() {
    const ctrls = this.changePasswordForm.controls;

    for (let control in ctrls) {
      if (ctrls.hasOwnProperty(control)) {
        ctrls[control].markAsDirty();
        ctrls[control].markAsTouched();
      } 
    }
  }
}
