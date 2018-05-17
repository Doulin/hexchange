import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BannerComponent } from './home/banner/banner.component';
import { TradeComponent } from './trade/trade.component';

const appRoutes: Routes = [
    {
        path: 'trade',
        component: TradeComponent
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
