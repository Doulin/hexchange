import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { HeaderComponent } from '../home/header/header.component';
import { BannerComponent } from '../home/banner/banner.component';
import { FooterComponent } from '../home/footer/footer.component';
import { LoginComponent } from '../auth/login/login.component';
import { RegisterComponent } from '../auth/register/register.component';
import { ApiComponent } from '../api/api.component';
import { SupportComponent } from '../support/support.component';
import { AboutComponent } from '../api/about/about.component';
import { ApiAccessComponent } from '../api/api-access/api-access.component';
import { AuthenComponent } from '../api/authen/authen.component';
import { BackupComponent } from '../api/backup/backup.component';
import { FeeComponent } from '../api/fee/fee.component';
import { GeneralComponent } from '../api/general/general.component';
import { GetComponent } from '../api/get/get.component';
import { GuideComponent } from '../api/guide/guide.component';
import { PostComponent } from '../api/post/post.component';
import { SercureComponent } from '../api/sercure/sercure.component';

const homeRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', component: BannerComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      {
        path: 'support',
        component: SupportComponent
      },
      {
        path: 'api',
        component: ApiComponent,
        children: [
          {path: '', redirectTo: 'about', pathMatch: 'full'},
          {path: 'about', component: AboutComponent},
          {path: 'access', component: ApiAccessComponent},
          {path: 'authen', component: AuthenComponent},
          {path: 'backup', component: BackupComponent},
          {path: 'fee', component: FeeComponent},
          {path: 'general', component: GeneralComponent},
          {path: 'get', component: GetComponent},
          {path: 'guide', component: GuideComponent},
          {path: 'post', component: PostComponent},
          {path: 'sercure', component: SercureComponent},
        ]
      },
    ]
  }

];

@NgModule({
  imports: [
    RouterModule.forChild(homeRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class HomeRoutesModule { }
