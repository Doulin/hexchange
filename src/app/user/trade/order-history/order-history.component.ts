import { Component, OnInit } from '@angular/core';

import { Orders } from '../../../core/models/order';
import { OrderService } from '../../../core/services/order.service';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit {
  orderHistory: any[] = [
    {
      id: 1, user_id: 2, currency_id: 1, order_size: 0.002, order_price: 980, order_side: 1,
      order_type: 3, order_status: 0, create_at: '08/05/2018 - 22:00'
    },
    {
      id: 2, user_id: 2, currency_id: 3, order_size: 0.015, order_price: 11250, order_side: 0,
      order_type: 3, order_status: 1, create_at: '01/05/2018 - 12:01'
    },
    {
      id: 3, user_id: 2, currency_id: 3, order_size: 1.002, order_price: 12110, order_side: 0,
      order_type: 3, order_status: 2, create_at: '17/04/2018 - 2:20'
    },
    {
      id: 4, user_id: 2, currency_id: 1, order_size: 12.002, order_price: 888, order_side: 1,
      order_type: 3, order_status: 3, create_at: '15/04/2018 - 23:01'
    }

  ];
  constructor() { }

  ngOnInit() {
  }

}
