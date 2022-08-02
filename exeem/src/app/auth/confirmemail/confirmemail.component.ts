import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmemail',
  templateUrl: './confirmemail.component.html',
  styleUrls: ['./confirmemail.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class ConfirmemailComponent implements OnInit {

  getData:any;

  constructor(private router:Router,) { }

  ngOnInit(): void {
    // setTimeout(() => {
    //   localStorage.removeItem('email');
    //   this.router.navigate(['/login']);
    // }, 7000);

    // locale storage for send email to another page
    this.getData = localStorage.getItem('email');

  }

}
