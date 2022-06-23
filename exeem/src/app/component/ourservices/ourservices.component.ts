import { Component, OnInit } from '@angular/core';
import Swiper from 'swiper';


@Component({
  selector: 'app-ourservices',
  templateUrl: './ourservices.component.html',
  styleUrls: ['./ourservices.component.css']
})
export class OurservicesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 3,
      spaceBetween: 30,
      loop:true,
      freeMode: true,
      breakpoints: {
        0: {
            slidesPerView: 3.5,
            spaceBetween: 10,
            freeMode:false,
        },
        600: {
            slidesPerView: 4.5,
            spaceBetween: 20,
        },
        1000: {
            slidesPerView: 6,
            spaceBetween: 20,
        },
    },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }

}
