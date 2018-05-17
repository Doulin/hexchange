import 'rxjs/add/operator/map';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Response } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Users } from '../../core/models/user';
import { environment } from '../../../environments/environment';

@Injectable()
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  createUser(user: any) {
    // const header = new HttpHeaders();
    // header.append('Access-Control-Allow-Headers', 'Content-Type');
    // header.append('Content-Type', 'application/json');
    // header.append('Access-Control-Allow-Origin', 'http://localhost:4200');
    const respone = this.http.post('http://login-demo.local.com/api/users/create', user)
      .map((res: Response) => res.json);
    return respone;
  }
}
