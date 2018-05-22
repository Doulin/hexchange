import { Component, OnInit } from '@angular/core';
import {AuthService} from '../core/services/auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }
  logOut () {
    this.authService.userLogout();
    console.log('Logged Out - User/Trade Page');
  }
}
