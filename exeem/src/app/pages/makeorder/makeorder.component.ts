import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-makeorder',
  templateUrl: './makeorder.component.html',
  styleUrls: ['./makeorder.component.css']
})
export class MakeorderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(".btn").on('click',()=>{
      $('.fcoloumn').css('display','none')
      $('.scoloumn').css('display','flex')

    })
    $(".btn-2-prev").on('click',()=>{
      $('.fcoloumn').css('display','flex')
      $('.scoloumn').css('display','none')

    })
  }

}
