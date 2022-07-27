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
    return this.http.get(`https://newsapi.org/v2/top-headlines?country=eg&apiKey=API_KEY`);
  }

  //////////////////////////////////////////// home page /////////////////////////////////////////////



}
