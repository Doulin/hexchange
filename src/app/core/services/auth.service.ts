import 'rxjs/add/operator/map';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Response } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Router} from '@angular/router';

import { Users } from '../../core/models/user';
import { environment } from '../../../environments/environment';
import {AuthToken} from '../models/authToken';

@Injectable()
export class AuthService {
  authToken: AuthToken;

  constructor(
    private _http: HttpClient,
    private _router: Router
  ) { }

  userLogin(user: any) {
    const header = new HttpHeaders({'No-Auth': 'True'});
    return this._http.post('http://login-demo.local.com/oauth/token', user, {headers: header});
  }

  userLogout(): void {
    localStorage.removeItem('userToken');
    this._router.navigate(['/login']);
  }

}
