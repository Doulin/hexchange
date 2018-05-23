import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  isLoggedIn = false;
  constructor() { }

  ngOnInit() {
    this.checkLogin();
  }
  checkLogin() {
    if (localStorage.getItem('userToken')) {
      this.isLoggedIn = true;
    }
  }

}
