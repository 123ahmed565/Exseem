import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-shopixservices',
  templateUrl: './shopixservices.component.html',
  styleUrls: ['./shopixservices.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class ShopixservicesComponent implements OnInit {

  constructor() { }

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
  }

}
