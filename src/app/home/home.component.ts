import { Component, OnInit } from '@angular/core';

import {HeaderComponent} from '../home/header/header.component';
import {BannerComponent} from '../home/banner/banner.component';
import {FooterComponent} from '../home/footer/footer.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
