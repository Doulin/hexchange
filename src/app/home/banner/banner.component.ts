import { Component, OnInit } from '@angular/core';

import {NgxCarousel} from 'ngx-carousel';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  public carouselCoinItems: Array<any>;
  public carouselCoinTile: NgxCarousel;
  isLoggedIn = false;

  constructor() {
    this.carouselCoinItems = [
      {name: 'Bitcoin', image: 'assets/carouselImage/images/bitcoin.jpg', logo: 'assets/carouselImage/logo/BTC.png'},
      {name: 'Ethereum', image: 'assets/carouselImage/images/ethereum.jpg', logo: 'assets/carouselImage/logo/ETH.png'},
      {name: 'Litecoin', image: 'assets/carouselImage/images/litecoin.jpg', logo: 'assets/carouselImage/logo/LTC.png'},
      {name: 'Ripple', image: 'assets/carouselImage/images/ripple.jpg', logo: 'assets/carouselImage/logo/XRP.png'},
      {name: 'Zcash', image: 'assets/carouselImage/images/zcash.jpg', logo: 'assets/carouselImage/logo/ZEC.png'},
      {name: 'Neo', image: 'assets/carouselImage/images/neo.jpg', logo: 'assets/carouselImage/logo/neo.png'},
      {name: 'Bitcoin Cash', image: 'assets/carouselImage/images/bitcoin-cash.jpg', logo: 'assets/carouselImage/logo/BCH.png'},
      {name: 'Ethereum Classic', image: 'assets/carouselImage/images/ethereum-classic.jpg', logo: 'assets/carouselImage/logo/ETC.png'}
    ];
  }

  checkLogin() {
    if (localStorage.getItem('userToken')) {
      this.isLoggedIn = true;
    }
  }
  ngOnInit() {
    this.carouselCoinTile = {
      grid: {xs: 2, sm: 3, md: 4, lg: 4, all: 0},
      slide: 4,
      speed: 400,
      animation: 'lazy',
      point: {
          visible: true
      } ,
      load: 2,
      touch: true,
      easing: 'ease'
    };
    this.checkLogin();
  }

  public carouselCoinLoad (event: any) {

  }

}
