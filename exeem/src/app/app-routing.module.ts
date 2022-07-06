import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetpasswordComponent } from './auth/forgetpassword/forgetpassword.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { FilterComponent } from './component/filter/filter.component';
import { PagenotfoundComponent } from './component/pagenotfound/pagenotfound.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'login',
    component:LoginComponent,
  },
  {
    path:'register',
    component:RegisterComponent,
  },
  {
    path:'forgetpassword',
    component:ForgetpasswordComponent,
  },
  {
    path:'filter',
    component:FilterComponent,
  },
  {
    path:'notfound',
    component:PagenotfoundComponent,
  },
  {
    path:'**',
    redirectTo:'notfound',

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
