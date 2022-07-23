import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import swiper from 'swiper';
import SwiperCore, {Autoplay} from 'swiper';
SwiperCore.use([Autoplay]);
import Swiper, { SwiperOptions } from 'swiper';import { SwiperComponent } from 'swiper/angular';
import * as $ from 'jquery'

@Component({
  selector: 'app-shopixproductsdetails',
  templateUrl: './shopixproductsdetails.component.html',
  styleUrls: ['./shopixproductsdetails.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class ShopixproductsdetailsComponent implements OnInit {

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
    // show small img to big image page product details
    // $( '.products img').mouseover(function () {
    //   var imageSrc = $(this).attr('src');
    //   console.log(imageSrc);
    //   console.log("imageSrc");

    //   if(imageSrc){
    //     $(".block .mainImageProduct").attr("src", imageSrc);
    //   }
    // });
  }

}
