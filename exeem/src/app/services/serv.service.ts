import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServService {
  // attach api
  BASE_URL:string="http://68.178.161.192";

  // for remove button login
  username:Observable<string>|null=null;
  private loggedIn = new BehaviorSubject<boolean>(false);
  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }
  loginn() {
    this.loggedIn.next(true);
  }
  logout() {
    this.loggedIn.next(false);


  }

  constructor(private http: HttpClient) {}
  ///////////////////////////////////////////// authentication ////////////////////////////////////////

  // register page
  register(data:any){
    return this.http.post(`${this.BASE_URL}/api/Accounts/Rigester`,data);
  }

  // login page
  login(data:any){
    return this.http.post(`${this.BASE_URL}/api/Accounts/Login`,data);
  }

  // forget password
  forget(data:any){
    return this.http.post(`${this.BASE_URL}/api/Accounts/ForgotPassword`,data);
  }

  // after verified
  verified(data:any){
    return this.http.get(`${this.BASE_URL}/api/Accounts/afterverfied?token=${data.token}&userid=${data.userid}`);
  }


  // reser paasowrd
  reset(data:any){
    return this.http.post(`${this.BASE_URL}/api/Accounts/ResetPassword`,data);
  }

  ///////////////////////////////////////////// authentication ////////////////////////////////////////


  //////////////////////////////////////////// shopex page /////////////////////////////////////////////

  // swiper category
  getProduct(){
    return this.http.get(`${this.BASE_URL}/api/ShopEx/GetProductServices`);
  }

  //////////////////////////////////////////// shopex page /////////////////////////////////////////////

  //////////////////////////////////////////// home page /////////////////////////////////////////////

  // ournew
  getNews(){
    return this.http.get(`https://newsapi.org/v2/top-headlines?country=eg&apiKey=0a860a19f6374423b6723562624021ef`);
  }

  //////////////////////////////////////////// home page /////////////////////////////////////////////



}
