import { Component, OnInit ,ViewChild} from '@angular/core';
import swiper from 'swiper';
import SwiperCore, {Autoplay} from 'swiper';
SwiperCore.use([Autoplay]);
import Swiper, { SwiperOptions } from 'swiper';import { SwiperComponent } from 'swiper/angular';
import { ServService } from 'src/app/services/serv.service';


@Component({
  selector: 'app-ournews',
  templateUrl: './ournews.component.html',
  styleUrls: ['./ournews.component.css']
})
export class OurnewsComponent implements OnInit {

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

  ngOnInit(): void {
    // get data from api ournews category
    this.api.getProduct().subscribe((res:any)=>{
      // this.ahmed=res;
      // alert(JSON.stringify(this.ahmed));
    });
  }

}
