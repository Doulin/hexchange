import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { HeaderComponent } from '../home/header/header.component';
import { BannerComponent } from '../home/banner/banner.component';
import { FooterComponent } from '../home/footer/footer.component';
import { LoginComponent } from '../auth/login/login.component';
import { RegisterComponent } from '../auth/register/register.component';
import { DocComponent } from '../document/doc.component';
import { SupportComponent } from '../support/support.component';
import { AboutComponent } from '../document/about/about.component';
import { GuideComponent } from '../document/guide/guide.component';
import { ApiAccessComponent } from '../document/api-access/api-access.component';
import { FeeComponent } from '../document/fee/fee.component';
import { GeneralComponent } from '../document/general/general.component';
import { GetComponent } from '../document/get/get.component';
import { PostComponent } from '../document/post/post.component';
import { AuthenComponent } from '../document/authen/authen.component';
import { BackupComponent } from '../document/backup/backup.component';
import { SercureComponent } from '../document/sercure/sercure.component';


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
        path: 'doc',
        component: DocComponent,
        children: [
          {path: '', redirectTo: 'about', pathMatch: 'full'},
          {path: 'about', component: AboutComponent},
          {path: 'api-access', component: ApiAccessComponent},
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
