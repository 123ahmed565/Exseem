import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router,ActivatedRoute, Params } from '@angular/router';
import { ServService } from 'src/app/services/serv.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';


@Component({
  selector: 'app-afterverified',
  templateUrl: './afterverified.component.html',
  styleUrls: ['./afterverified.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class AfterverifiedComponent implements OnInit {

  urlParams:any={};

  constructor(private api:ServService,private activatedRoute: ActivatedRoute) {}

  data=[this.urlParams.token=this.activatedRoute.snapshot.queryParamMap.get('token'),this.urlParams.userid=this.activatedRoute.snapshot.queryParamMap.get('userid')];



  verified() {
    this.api.verified().subscribe((res:any)=>{
      // this.data=res;
    }
  )}


  ngOnInit(): void {
    alert(this.data);
  }
}
