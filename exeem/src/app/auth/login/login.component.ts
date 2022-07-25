import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ServService } from 'src/app/services/serv.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router, private api:ServService) { }

    loginForm = new FormGroup({
    email: new FormControl('',[Validators.email,Validators.required]),
    password: new FormControl('',Validators.required),
});

// login validations
onSubmitLogin() {
  if(this.loginForm.invalid){
    alert('من فضلك ادخل البريد الإلكتروني و كلمة السر')
  }
  else{
    this.api.login(this.loginForm.value).subscribe((res:any)=>{
      alert("تم تسجيل دخولك بنجاح");
      this.router.navigate(['/home']);
    },
    (err:any)=>{
      console.log(err);
      alert("الايميل او الباسورد خطأ");
    }
    );
  }
}

  ngOnInit(): void {
  }


}
