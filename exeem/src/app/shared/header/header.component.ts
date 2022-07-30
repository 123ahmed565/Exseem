import { Component, ElementRef, OnInit, ViewChild  } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';
import { ServService } from 'src/app/services/serv.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    //check for if login remove button login from header
    loginStatues=new BehaviorSubject<boolean>(false);
    isLogin$:Observable<boolean>|null=null;

    // function logout
    logout():void{
      this.api.logout();
      localStorage.removeItem('isLogin')
      this.isLogin=false
    }

  upBtn: Boolean = false;
  test: Boolean = false;
  isLogin: Boolean = false;

  constructor(private api:ServService) {
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
    // check for if login remove button login from header
    this.isLogin$=this.api.isLoggedIn

    // localStorage
    localStorage.getItem('token');
    localStorage.getItem('isLogin');
    if(localStorage.getItem('isLogin')){
    this.isLogin=true
    }



    // this for top head when click on button categories
    $(document).on('click','.chevron-active',function(){
      if($('.chevron-i').hasClass('fa-caret-down')){
      $('.chevron-i').removeClass('fa-caret-down');
      $('.chevron-i').addClass('fa-caret-up');
      }
      else{
          $('.chevron-i').addClass('fa-caret-down');
          $('.chevron-i').removeClass('fa-caret-up');
      }
    });
  }

}
