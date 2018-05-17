import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import {AlertService} from '../../core/services/alert.services';

@Component({
  selector: 'app-alert-message',
  templateUrl: './alert-message.component.html',
  styleUrls: ['./alert-message.component.css']
})
export class AlertMessageComponent implements OnDestroy {
  private subscription: Subscription;
  message: any;

  constructor(private alertService: AlertService) {
      // subscribe to alert messages
      this.subscription = alertService.getMessage().subscribe(message => { this.message = message; });
  }

  ngOnDestroy(): void {
      // unsubscribe on destroy to prevent memory leaks
      this.subscription.unsubscribe();
  }

}
