import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router:Router) { }

  registerForm = new FormGroup({
    // name: new FormControl('', Validators.minLength(2)),
    email: new FormControl('', [Validators.email,Validators.required]),
    phone: new FormControl('', [Validators.pattern('^01[0-2,5]{1}[0-9]{8}'),Validators.required]),
    password: new FormControl('',Validators.required),
    authpassword: new FormControl('',Validators.required),
});


// register validations
onSubmitRegister() {
  let  data = this.registerForm.value;

  console.log(data);
  console.log(data.password===data.authpassword);

  if(this.registerForm.invalid){
    alert('من فضلك ادخل جميع بياناتك')
  }
  else{
    // if password not match retype password
    if(data.password===data.authpassword)
    {
      this.router.navigate(['/login']);
    }
    else{
      alert("الرقم السري غير متطابق");
    }
  }
    console.log(this.registerForm.value);
  }


  ngOnInit(): void {
  }

}
