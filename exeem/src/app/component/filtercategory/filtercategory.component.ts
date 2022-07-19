import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-filtercategory',
  templateUrl: './filtercategory.component.html',
  styleUrls: ['./filtercategory.component.css']
})
export class FiltercategoryComponent implements OnInit {

  constructor() { }

  plusminuschange1 = true;
  plusminuschange2=true;
  id =0;

  ngOnInit(): void {
    $('.content-collapse').css('display', 'block');
    $('.item-header-collapse:first,.icon:first').toggleClass('active');
    $(document).on('click','.item-header-collapse',function(){
      $(this).next().slideToggle(500);
      $(this).find('.icon').toggleClass('active');
      $(this).toggleClass('active');
    })
  }

  plusminusclicked(id:any) {
switch (id){
  case 1:
    switch (this.plusminuschange1) {
      case true:
        this.plusminuschange1 = !this.plusminuschange1;
        document.getElementById('plus1')!.style.display = 'none';
        document.getElementById('dash1')!.style.display = 'flex';
        document.getElementById('body1')!.style.display = 'flex';
        break;
      case false:
        this.plusminuschange1 = !this.plusminuschange1;
        document.getElementById('dash1')!.style.display = 'none';
        document.getElementById('plus1')!.style.display = 'flex';
        document.getElementById('body1')!.style.display = 'none';
        break;
    }
    break;

  case 2:
  switch (this.plusminuschange2) {
    case true:
      this.plusminuschange2 = !this.plusminuschange2;
      document.getElementById('plus2')!.style.display = 'none';
      document.getElementById('dash2')!.style.display = 'flex';
      document.getElementById('body2')!.style.display = 'flex';
      break;
    case false:
      this.plusminuschange2 = !this.plusminuschange2;
      document.getElementById('dash2')!.style.display = 'none';
      document.getElementById('plus2')!.style.display = 'flex';
      document.getElementById('body2')!.style.display = 'none';
      break;
  }
}
}

}
