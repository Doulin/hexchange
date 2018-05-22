import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

import { Orders } from '../models/order';

@Injectable()
export class OrderService {

  constructor(
    private _http: HttpClient
  ) { }

  createOrder(order: Orders): Observable<Orders> {
    return this._http.post<Orders>('http://login-demo.local.com/api/create/order', order)
      .pipe(
        tap(createdOrder => console.log(`Order Created = ${JSON.stringify(createdOrder)}`)),
        catchError(error => of(new Orders()))
      );
  }

  getAllOrder() {
    return this._http.get('http://login-demo.local.com/api/create/order');
  }

  getOrderByUser() {
    return this._http.get('http://login-demo.local.com/api/create/order');
  }

  getAllTrade() {
    return this._http.get('http://login-demo.local.com/api/create/order');
  }
}
