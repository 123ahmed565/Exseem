import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetpasswordComponent } from './auth/forgetpassword/forgetpassword.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { FilterComponent } from './component/filter/filter.component';
import { PagenotfoundComponent } from './component/pagenotfound/pagenotfound.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { HomeComponent } from './pages/home/home.component';
import { ShopixComponent } from './pages/shopix/shopix.component';
import { ShopixproductsComponent } from './pages/shopixproducts/shopixproducts.component';
import { ShopixproductsdetailsComponent } from './pages/shopixproductsdetails/shopixproductsdetails.component';
import { ShopixservicesComponent } from './pages/shopixservices/shopixservices.component';
import { ShopixservicesdetailsComponent } from './pages/shopixservicesdetails/shopixservicesdetails.component';

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
    path:'shopix',
    component:ShopixComponent,
  },
  {
    path:'shopixproducts',
    component:ShopixproductsComponent,
  },
  {
    path:'shopixproductsdetails',
    component:ShopixproductsdetailsComponent,
  },
  {
    path:'shopixservices',
    component:ShopixservicesComponent,
  },
  {
    path:'shopixservicesdetails',
    component:ShopixservicesdetailsComponent,
  },
  {
    path:'contact',
    component:ContactusComponent,
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
