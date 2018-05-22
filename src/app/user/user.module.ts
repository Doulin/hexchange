import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UserRoutesModule } from './user-routes.module';
import { AuthInterceptor } from '../core/services/auth.interceptor';

import { UserComponent } from '../user/user.component';
import { TradeComponent } from './trade/trade.component';
import { DepositComponent } from './deposit/deposit.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { AccountComponent } from './account/account.component';
import { OrderFormComponent } from './trade/order-form/order-form.component';
import { OrderBookComponent } from './trade/order-book/order-book.component';
import { OrderHistoryComponent } from './trade/order-history/order-history.component';
import { ChartPriceComponent } from './trade/chart-price/chart-price.component';
import { OrderService } from '../core/services/order.service';
import { InforPersonComponent } from './account/infor-person/infor-person.component';
import { InforWalletComponent } from './account/infor-wallet/infor-wallet.component';
import { InforSercureComponent } from './account/infor-sercure/infor-sercure.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    UserRoutesModule
  ],
  declarations: [
    UserComponent,
    TradeComponent,
    DepositComponent,
    WithdrawComponent,
    AccountComponent,
    OrderFormComponent,
    OrderBookComponent,
    OrderHistoryComponent,
    ChartPriceComponent,
    InforPersonComponent,
    InforWalletComponent,
    InforSercureComponent
  ],
  providers: [
    OrderService,
    {
      provide : HTTP_INTERCEPTORS,
      useClass : AuthInterceptor,
      multi : true
    }
  ]
})
export class UserModule { }
