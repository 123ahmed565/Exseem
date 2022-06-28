import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }

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
    this.router.navigate(['/home']);
  }
    console.log(this.loginForm.value);
}

  ngOnInit(): void {
  }

}
