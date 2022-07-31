import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ServService } from 'src/app/services/serv.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private apiService: ServService, private _router: Router) {}

  canActivate(){
    if(this.apiService.isLoggedIn){
      return true;
    }
    this._router.navigate(['/notfound'])
    return false;
  }
}

