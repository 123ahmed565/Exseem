import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ServService } from 'src/app/services/serv.service';


@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {

  constructor(private router:Router, private api:ServService) { }

  resetForm = new FormGroup({
    password: new FormControl('',Validators.required),
    confirmpassword: new FormControl('',Validators.required),
});

// login validations
reset() {
  let  data = this.resetForm.value;

  if(this.resetForm.invalid){
    alert('من فضلك ادخل جميع بياناتك')
  }
  else{
    if(data.password===data.confirmpassword)
    {
      alert('تم تسجيلك الحساب');
      this.router.navigate(['/login']);
    }
    else{
      alert("الرقم السري غير متطابق");
    }
  }

}

  ngOnInit(): void {
  }

}
