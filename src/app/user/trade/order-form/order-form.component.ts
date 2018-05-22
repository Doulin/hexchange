import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, AbstractControl, FormBuilder } from '@angular/forms';
import { HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs/Subscription';

import { Orders } from '../../../core/models/order';
import { OrderService } from '../../../core/services/order.service';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {
  orderForm: FormGroup;
  constructor(private formBuilder: FormBuilder, public orderService: OrderService) { }

  ngOnInit() {
    this.initForm();
  }

  createOrder() {
    const order: Orders = new Orders();
    order.order_type = 2;
    order.order_size = this.orderForm.value.order_size;
    order.order_price = this.orderForm.value.order_price;
    order.order_side = this.orderForm.value.order_side;
    order.currency_id = this.orderForm.value.currency;
    console.log(order);
    this.orderService.createOrder(order)
    .subscribe(data => {
      console.log('Create Done');
    });
  }
  initForm() {
    this.orderForm = this.formBuilder.group({
      order_side: this.formBuilder.control('', [Validators.required]),
      order_size: this.formBuilder.control('', [Validators.required]),
      order_price: this.formBuilder.control('', [Validators.required]),
      currency: this.formBuilder.control('', [Validators.required])
    });
  }
  onSubmit() {
    if (this.orderForm.valid) {
      this.createOrder();
    }
  }
}
