import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';
import { ServService } from 'src/app/services/serv.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //check for if login remove button login from header
  loginStatues=new BehaviorSubject<boolean>(false);
  isLogin$:Observable<boolean>|null=null;


  constructor(private router:Router, private api:ServService) { }

    loginForm = new FormGroup({
    email: new FormControl('',[Validators.email,Validators.required]),
    password: new FormControl('',Validators.required),
});

// login validations
onSubmitLogin() {
  if(this.loginForm.invalid){
    alert('من فضلك ادخل البريد الإلكتروني و كلمة السر');
  }
  else{
    this.api.login(this.loginForm.value).subscribe((res:any)=>{
      if(res.statusMessage.includes("هذا البريد الالكتروني  ليس مشترك")){
        alert(res.statusMessage);
      }
      else if(res.statusMessage.includes("الرقم السري غير صحيح")){
        alert(res.statusMessage);
      }
      else{
        // check for if login remove button login from header
        this.api.loginn();

        // local storage token
        localStorage.setItem('userlogintoken', JSON.stringify(res.token));
        localStorage.setItem('isLogin', JSON.stringify(true));

        // put name & charchter in header
        localStorage.setItem('name',res.name);
        localStorage.setItem('character', res.character);


        alert("تم تسجيل دخولك بنجاح");
        this.router.navigate(['/home']);
      }
    },
    (err:any)=>{
      console.log(err);
      alert("الايميل او الباسورد خطأ");
    }
    );
  }
}

  ngOnInit(): void {
    // check for if login remove button login from header
    this.isLogin$=this.api.isLoggedIn
  }


}
