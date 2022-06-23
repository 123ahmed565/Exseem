import { Component, ElementRef, OnInit, ViewChild  } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  upBtn: Boolean = false;
  test: Boolean = false;

  constructor() {
    document.addEventListener('scroll', (e) => {
      if (document.documentElement.scrollTop <= 100) {
        this.upBtn = false;
      } else {
        this.upBtn = true;
      }
    });
  }

  upbtn(): void {
    window.scroll(0, 0);
  }
  scrollBtn(): void {
    if (window.scrollY <= 100) {
      this.upBtn = true;
    } else {
      this.upBtn = false;
    }
  }

  ngOnInit(): void {
  }

}
