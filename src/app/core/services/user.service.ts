import { catchError, map, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Response } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Users } from '../models/user';

@Injectable()
export class UserService {
  constructor(
    private _http: HttpClient
  ) { }

  // Create new User using API from server
  createUser(user: any) {
    const header = new HttpHeaders({'No-Auth': 'True'});
    return this._http.post('http://login-demo.local.com/api/users/create', user, {headers: header})
      .map((res: Response) => res.json);
  }

  getUserInfor(): Observable<Users> {
    return this._http.get<Users>('http://login-demo.local.com/api/users/info')
      .pipe(
        tap(loggedUser => console.log(loggedUser)),
        catchError(error => of(new Users()))
      );
  }

  updateUser(user: Users): Observable<any> {
    return this._http.put('http://login-demo.local.com/api/users/update', user)
      .pipe(
        tap(updateUser => console.log(`update user = ${JSON.stringify(updateUser)}`)),
        catchError(error => of(new Users()))
      );
  }
}
