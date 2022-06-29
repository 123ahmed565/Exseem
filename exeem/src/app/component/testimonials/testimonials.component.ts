import { Component, OnInit, ViewChild } from '@angular/core';
import swiper from 'swiper';
import SwiperCore, {Autoplay} from 'swiper';
SwiperCore.use([Autoplay]);
import Swiper, { SwiperOptions } from 'swiper';import { SwiperComponent } from 'swiper/angular';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {
  @ViewChild('swiperSlideShow') swiperSlideShow!: SwiperComponent;
  config: SwiperOptions = {};

  ngAfterViewInit(): void
  {
    this.config = {
      //...
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
