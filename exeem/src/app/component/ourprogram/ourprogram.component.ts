import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ourprogram',
  templateUrl: './ourprogram.component.html',
  styleUrls: ['./ourprogram.component.css']
})
export class OurprogramComponent implements OnInit {
  isReadMore1 = true
  isReadMore2 = true
  isReadMore3 = true
  isReadMore4 = true
  isReadMore5 = true
  isReadMore6 = true

  showText1() {
     this.isReadMore1 = !this.isReadMore1
  }
  showText2() {
    this.isReadMore2 = !this.isReadMore2
 }
 showText3() {
  this.isReadMore3 = !this.isReadMore3
}
showText4() {
  this.isReadMore4 = !this.isReadMore4
}
showText5() {
  this.isReadMore5 = !this.isReadMore5
}
showText6() {
  this.isReadMore6 = !this.isReadMore6
}

  constructor() { }

  ngOnInit(): void {

  }

}
