import { Component, OnInit } from '@angular/core';
import {HttpResponse} from '@angular/common/http';

import { Orders } from '../../../core/models/order';
import { OrderService } from '../../../core/services/order.service';


@Component({
  selector: 'app-order-book',
  templateUrl: './order-book.component.html',
  styleUrls: ['./order-book.component.css']
})
export class OrderBookComponent implements OnInit {
  order: Orders[];
  constructor(
    public orderService: OrderService
  ) { }

  ngOnInit() {

  }

  getAllOrder() {
    this.orderService.getAllOrder()
    .subscribe(listOrder => this.order = listOrder);
  }
}
