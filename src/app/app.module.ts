import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import {AppRoutingModule} from './app-routing.module';
import {HomeModule} from './home/home.module';
import {UserModule} from './user/user.module';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    UserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
