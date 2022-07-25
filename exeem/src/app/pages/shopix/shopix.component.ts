import * as $ from 'jquery'
import { Component, OnInit, ViewChild } from '@angular/core';
import swiper from 'swiper';
import SwiperCore, {Autoplay} from 'swiper';
SwiperCore.use([Autoplay]);
import Swiper, { SwiperOptions } from 'swiper';import { SwiperComponent } from 'swiper/angular';
import { ServService } from 'src/app/services/serv.service';


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

  constructor(private api:ServService) { }

  posts:any;

  ngOnInit(): void {
    // grid - list for page categories
    $(document).ready(function () {
      $(".gridListBtn").on("click", function (e) {
        e.preventDefault();
        var type = $(this).attr("id");
        // console.log(type);
        if (type == "list") {
          // container control
          $(".ul-filter").removeClass("list-view-filter");
          $(".ul-filter").removeClass("grid-view-filter");
          $(".ul-filter").addClass("list-view-filter ");
        } else if (type == "grid") {
          // container control
          $(".ul-filter").removeClass("list-view-filter");
          $(".ul-filter").removeClass("grid-view-filter");
          $(".ul-filter").addClass("grid-view-filter");
        }
      });
    });

    // add class style to button Grid & List
    $(document).on('click','.gridListBtn',function(){
      var type = $(this).attr("id");
      $('.gridListBtn').removeClass('active-color-filter');
      if (type == "list") {
        $('.listImage').addClass('active-color-filter');
      $('.gridImage').removeClass('active-color-filter');
      }
      else{
        $('.gridImage').addClass('active-color-filter');
        $('.listImage').removeClass('active-color-filter');
      }
    })


    // get data from swiper category
    this.api.getProduct().subscribe((res:any)=>{
    });

  }

}
