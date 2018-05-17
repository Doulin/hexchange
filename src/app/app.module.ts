import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';




import {AppRoutingModule} from './app-routing.module';
import {HomeModule} from './home/home.module';

import { AppComponent } from './app.component';

import { TradeComponent } from './trade/trade.component';
import { OrderHistoryComponent } from './trade/order-history/order-history.component';
import { PriceChartComponent } from './trade/price-chart/price-chart.component';
import { OrderBookComponent } from './trade/order-book/order-book.component';
import { OrderFormComponent } from './trade/order-form/order-form.component';



@NgModule({
  declarations: [
    AppComponent,
    TradeComponent,
    OrderHistoryComponent,
    PriceChartComponent,
    OrderBookComponent,
    OrderFormComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
