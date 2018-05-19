import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BannerComponent } from './home/banner/banner.component';
import { UserComponent } from './user/user.component';

const appRoutes: Routes = [
    {
        path: 'user',
        loadChildren: 'app/user/user.module#UserModule'
    },
    {
        path: 'home',
        loadChildren: 'app/home/home.module#HomeModule'
    },
    {
        path: '', redirectTo: '/home', pathMatch: 'full'
    }

];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            { enableTracing: false }
        )
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule { }
