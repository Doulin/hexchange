import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, AbstractControl, FormBuilder } from '@angular/forms';
import { HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs/Subscription';

import { AuthService } from '../../core/services/auth.service';
import { AlertService } from '../../core/services/alert.services';
import { Users } from '../../core/models/user';

export function forbiddenValue(abstractControl: AbstractControl) {
  const users = ['admin', 'manager'];
  return (users.includes(abstractControl.value)) ? { invalidValue: true } : null;
}
export function comparePass(abstractControl: AbstractControl) {
  const v = abstractControl.value;
  return (v.password === v.confirm_password) ? null : { passnotmatch: true };
}
export function isPhoneNumber(abstractControl: AbstractControl) {
  const v = /^\d{10}$/.test(abstractControl.value);
  const k = /^\d{9}$/.test(abstractControl.value);
  return (v || k) ? null : { invalidPhone: true };
}
export function isCountryCode(abstractControl: AbstractControl) {
  const v = /^[0-9]*/.test(abstractControl.value);
  return (v) ? null : { invalidCode: true };
}


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  private subscription: Subscription;
  registerForm: FormGroup;
  message: any;
  errEmail = false;
  errPassword = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private alertService: AlertService
  ) {
    this.subscription = alertService.getMessage().subscribe(message => { this.message = message; });
  }

  ngOnInit() {
    this.initForm();
  }

  register() {
    const user = {
      name: this.registerForm.value.name,
      email: this.registerForm.value.email,
      phone_number: this.registerForm.value.phone_number,
      country_code: this.registerForm.value.country_code,
      password: this.registerForm.value.pw.password
    };
    console.log(user);
    this.authService.createUser(user)
      .subscribe(
        data => {
          this.alertService.success('Registration successful', true);
        },
        error => {
          const errRespone = Object.keys(error.error).map(key => (error.error)[key]);
          const errMessage = Object.keys(errRespone[1]).map(key => ((errRespone[1])[key]));
          const string1 = 'The email has already been taken.';
          const string2 = 'The password format is invalid.';
          if (errMessage[0] === string1) {
            this.errEmail = true;
          }
          if (errMessage[0] === string2) {
            this.errPassword = true;
          }
        }
      );
  }
  initForm() {
    this.registerForm = this.formBuilder.group({
      name: this.formBuilder.control('', [Validators.required, Validators.minLength(4), forbiddenValue]),
      email: this.formBuilder.control('', [Validators.required, Validators.minLength(12), Validators.email]),
      phone_number: this.formBuilder.control('', [Validators.required, isPhoneNumber]),
      country_code: this.formBuilder.control('', [Validators.required, isCountryCode]),
      pw: this.formBuilder.group({
        password: this.formBuilder.control('', [Validators.required]),
        confirm_password: this.formBuilder.control('', [Validators.required])
      }, {
          validator: comparePass
        })
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      this.register();
    } else {
      this.registerForm.reset();
    }
  }

}
