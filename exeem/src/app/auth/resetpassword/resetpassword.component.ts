import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ServService } from 'src/app/services/serv.service';


@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {

  urlParams:any={};


  constructor(private router:Router, private api:ServService,private activatedRoute: ActivatedRoute) { }

  updatee=[this.urlParams.token=this.activatedRoute.snapshot.queryParamMap.get('token'),this.urlParams.email=this.activatedRoute.snapshot.queryParamMap.get('email')];


    resetForm = new FormGroup({
    password: new FormControl('',Validators.required),
    confirmpassword: new FormControl('',Validators.required),
    token: new FormControl(this.urlParams.token,Validators.required),
    email: new FormControl(this.urlParams.email,Validators.required),

});



// reset validations
reset() {
  let  data = this.resetForm.value;

  console.log(data);

  if(this.resetForm.invalid){
    alert('من فضلك ادخل جميع بياناتك')
  }
  else{
    if(data.password===data.confirmpassword)
    {
    this.api.reset(data).subscribe((res:any)=>{
      if(res.statusMessage.includes("تم تغير الرقم السري بنجاح")){
        alert(res.statusMessage);
        this.router.navigate(['/login']);
      }
    },
    (err:any)=>{
      console.log(err);
    }
    )
      // alert('تم تغيير كلمة السر');
      // this.router.navigate(['/login']);
    }
    else{
      alert("الرقم السري غير متطابق");
    }
  }

}

  ngOnInit(): void {
    alert(this.updatee);
  }

}
