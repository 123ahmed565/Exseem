import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent implements OnInit {

  constructor(private router:Router) { }

  forgetPasswordForm = new FormGroup({
    email: new FormControl('', [Validators.email,Validators.required]),
});

// forget password validations
onSubmitForget() {
  if(this.forgetPasswordForm.valid){
    alert('سيتم ارسال الرقم السري ع البريد الالكترونى الخاص بك  ان وجد');
    this.router.navigate(['/login']);
  }
  else{
    alert('قم بادخال البريد الالكترونى الخاص بك');
  }

  }


  ngOnInit(): void {
  }

}
