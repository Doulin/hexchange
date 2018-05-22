import { Component, OnInit } from '@angular/core';

import { Orders } from '../../../core/models/order';
import { OrderService } from '../../../core/services/order.service';


@Component({
  selector: 'app-order-book',
  templateUrl: './order-book.component.html',
  styleUrls: ['./order-book.component.css']
})
export class OrderBookComponent implements OnInit {

  constructor(
    public orderService: OrderService
  ) { }

  ngOnInit() {

  }

}
