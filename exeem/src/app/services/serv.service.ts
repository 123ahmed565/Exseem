import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServService {
BASE_URL:string="http://68.178.161.192";
  constructor(private http: HttpClient) {}
  register(data:any){
    return this.http.post(`${this.BASE_URL}/api/Accounts/Rigester`,data);
  }
  login(data:any){
    return this.http.post(`${this.BASE_URL}/api/Accounts/Login`,data);
  }
}
