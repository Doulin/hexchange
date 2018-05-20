import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserComponent } from '../user/user.component';
import { TradeComponent } from './trade/trade.component';
import { DepositComponent } from './deposit/deposit.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { AccountComponent } from './account/account.component';

const userRoutes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      {path: 'trade', component: TradeComponent},
      {path: 'deposit', component: DepositComponent},
      {path: 'withdraw', component: WithdrawComponent},
      {path: 'account', component: AccountComponent},
      {path: '', redirectTo: 'trade', pathMatch: 'full'}
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
