import { Component, OnInit, ViewChild } from '@angular/core';
import swiper from 'swiper';
import SwiperCore, {Autoplay} from 'swiper';
SwiperCore.use([Autoplay]);
import Swiper, { SwiperOptions } from 'swiper';import { SwiperComponent } from 'swiper/angular';

@Component({
  selector: 'app-shopix',
  templateUrl: './shopix.component.html',
  styleUrls: ['./shopix.component.css']
})
export class ShopixComponent implements OnInit {

  @ViewChild('swiperSlideShow') swiperSlideShow!: SwiperComponent;
  config: SwiperOptions = {};

  ngAfterViewInit(): void
  {
    this.config = {
      autoplay: {
        delay: 6000,
        disableOnInteraction: false
      }
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
