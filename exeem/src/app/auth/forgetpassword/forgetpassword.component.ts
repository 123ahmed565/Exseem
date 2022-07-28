import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ServService } from 'src/app/services/serv.service';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent implements OnInit {

  constructor(private router:Router, private api:ServService) { }

  forgetPasswordForm = new FormGroup({
    email: new FormControl('', [Validators.email,Validators.required]),
});

// forget password validations
onSubmitForget() {
  if(this.forgetPasswordForm.valid){
    this.api.forget(this.forgetPasswordForm.value).subscribe((res:any)=>{
      if(res.statusMessage.includes("هذا الحساب ليس مشترك")){
        alert(res.statusMessage);
      }
      else{
        alert('برجاء التأكد من البريد الالكترونى الخاص بك لتغير كلمة السر')
        this.router.navigate(['/login']);
      }
    },
    (err:any)=>{
      console.log(err);
      alert(JSON.stringify(err));
    }
    )
  }
  else{
    alert('قم بادخال البريد الالكترونى الخاص بك');
  }
  }


  ngOnInit(): void {
  }

}
