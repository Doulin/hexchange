import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {NgxCarouselModule} from 'ngx-carousel';

import {AuthService} from '../core/services/auth.service';
import {AlertService} from '../core/services/alert.services';
import {HomeRoutesModule} from '../home/home-routes.module';

import {HomeComponent} from '../home/home.component';
import {HeaderComponent} from '../home/header/header.component';
import {BannerComponent} from '../home/banner/banner.component';
import { NgxCarousel } from 'ngx-carousel/src/ngx-carousel/ngx-carousel.interface';
import {FooterComponent} from '../home/footer/footer.component';
import {LoginComponent} from '../auth/login/login.component';
import {RegisterComponent} from '../auth/register/register.component';
import {AlertMessageComponent} from '../auth/alert-message/alert-message.component';
import { ApiComponent } from '../api/api.component';
import { SupportComponent } from '../support/support.component';
import { AboutComponent } from '../api/about/about.component';
import { GuideComponent } from '../api/guide/guide.component';
import { ApiAccessComponent } from '../api/api-access/api-access.component';
import { FeeComponent } from '../api/fee/fee.component';
import { GeneralComponent } from '../api/general/general.component';
import { GetComponent } from '../api/get/get.component';
import { PostComponent } from '../api/post/post.component';
import { AuthenComponent } from '../api/authen/authen.component';
import { BackupComponent } from '../api/backup/backup.component';
import { SercureComponent } from '../api/sercure/sercure.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutesModule,
    NgxCarouselModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [
    HomeComponent,
    HeaderComponent,
    BannerComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    AlertMessageComponent,
    ApiComponent,
    SupportComponent,
    AboutComponent,
    GuideComponent,
    ApiAccessComponent,
    FeeComponent,
    GeneralComponent,
    GetComponent,
    PostComponent,
    AuthenComponent,
    BackupComponent,
    SercureComponent
  ],
  providers: [
    AuthService,
    AlertService
  ]
})
export class HomeModule { }
