import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators, AbstractControl, FormBuilder} from '@angular/forms';
import { HttpResponse } from '@angular/common/http';
import { Subscription } from 'rxjs/Subscription';

import {Orders} from '../../../core/models/order';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {
  orderForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.initForm();
  }

  createOrder() {
    const order = {
      order_type: '2',
      order_size: this.orderForm.value.order_size,
      order_price: this.orderForm.value.order_price,
      is_buy_side: this.orderForm.value.order_side,
      currency_id: this.orderForm.value.currency
    };
    console.log(order);
  }
  initForm() {
    this.orderForm = this.formBuilder.group({
      order_side: this.formBuilder.control('', [Validators.required]),
      order_size: this.formBuilder.control('', [Validators.required]),
      order_price: this.formBuilder.control('', [Validators.required]),
      currency: this.formBuilder.control('', [Validators.required])
    });
  }
}
