import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ServService } from 'src/app/services/serv.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router:Router, private api:ServService) { }

  registerForm = new FormGroup({
    firstname: new FormControl('', [Validators.minLength(3),Validators.pattern('^[\u0600-\u065F\u066A-\u06EF\u06FA-\u06FFa-zA-Z]+[\u0600-\u065F\u066A-\u06EF\u06FA-\u06FFa-zA-Z-_]*')]),
    lastname: new FormControl('', [Validators.minLength(3),Validators.pattern('^[\u0600-\u065F\u066A-\u06EF\u06FA-\u06FFa-zA-Z]+[\u0600-\u065F\u066A-\u06EF\u06FA-\u06FFa-zA-Z-_]*')]),
    email: new FormControl('', [Validators.email,Validators.required],),
    phoneNumber: new FormControl('', [Validators.pattern('^01[0-2,5]{1}[0-9]{8}'),Validators.required]),
    password: new FormControl('',Validators.required),
    confirmPassword: new FormControl('',Validators.required),
    job: new FormControl('',Validators.required),
});


// register validations
onSubmitRegister() {
  let  data = this.registerForm.value;


  if(this.registerForm.invalid){
    alert('من فضلك ادخل جميع بياناتك')
  }
  else{
    // if password not match retype password
    if(data.password===data.confirmPassword)
    {
      this.api.register(data).subscribe((res:any)=>
      {
        if(res.statusMessage.includes("البريد الالكتروني موجود بالفعل")){
          alert(res.statusMessage);
        }
        else{
          alert('تم تسجيلك الحساب');
          this.router.navigate(['/login']);
        }
      },
      (err:any)=>{
        if(err.error.msg.includes("البريد الالكتروني موجود بالفعل")){
          alert("برجاء المحاولة مرة اخرى ");
        }
        console.log(err);
      }
      )
    }
    else{
      alert("الرقم السري غير متطابق");
    }
  }
  }


  ngOnInit(): void {

  }

}
