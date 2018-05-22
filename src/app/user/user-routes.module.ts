import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from '../core/services/auth-guard.service';

import { UserComponent } from '../user/user.component';
import { TradeComponent } from './trade/trade.component';
import { DepositComponent } from './deposit/deposit.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { AccountComponent } from './account/account.component';
import { InforPersonComponent } from './account/infor-person/infor-person.component';
import { InforWalletComponent } from './account/infor-wallet/infor-wallet.component';
import { InforSercureComponent } from './account/infor-sercure/infor-sercure.component';

const userRoutes: Routes = [
  {
    path: '',
    component: UserComponent,
    canActivate: [AuthGuardService],
    children: [
      { path: 'trade', component: TradeComponent },
      { path: 'deposit', component: DepositComponent },
      { path: 'withdraw', component: WithdrawComponent },
      { path: 'account',
        component: AccountComponent,
        children: [
          { path: 'infor-person', component: InforPersonComponent },
          { path: 'infor-wallet', component: InforWalletComponent},
          { path: 'infor-sercure', component: InforSercureComponent},
          { path: '', redirectTo: 'infor-person', pathMatch: 'full'}
        ]
      },
      { path: '', redirectTo: 'trade', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(userRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: [

  ]
})
export class UserRoutesModule { }
