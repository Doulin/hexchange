import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { RecaptchaModule } from 'ng-recaptcha';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { AuthService } from '../../core/services/auth.service';
import { AlertService } from '../../core/services/alert.services';
import { AuthToken } from '../../core/models/authToken';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  authToken: any;

  constructor(
    public formBuilder: FormBuilder, private route: ActivatedRoute,
    private router: Router, public authService: AuthService,
    private alertService: AlertService
  ) { }

  ngOnInit(): void {
    this.authService.userLogout();
    this.loginForm = this.formBuilder.group({
      email: this.formBuilder.control('', [Validators.required, Validators.email, Validators.minLength(12)
      ]),
      password: this.formBuilder.control('', [Validators.required
      ])
    });
  }

  resolved(captchaResponse: string) {
    console.log('Done Captcha');
  }

  userLogin() {
    const user = {
      grant_type: 'password',
      client_id: '2',
      client_secret: 'bOI9gb2ymqf0dy32H2Uy9whmfTL0t2vObxyXbc4E',
      username: this.loginForm.value.email,
      password: this.loginForm.value.password
    };
    console.log('Start Here');
    this.authService.userLogin(user)
      .subscribe(
        response => {
          this.authToken = response;
          localStorage.setItem('userToken', this.authToken.access_token);
          this.router.navigate(['/user/trade']);
          console.log('Save Done');
        },
        error => {
          this.alertService.error('Email or Password is incorrect !');
        }
      );
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.userLogin();
    }
  }


}
