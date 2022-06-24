import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { ForgetpasswordComponent } from './auth/forgetpassword/forgetpassword.component';
import { RegisterComponent } from './auth/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { OurprogramComponent } from './component/ourprogram/ourprogram.component';
import { OurservicesComponent } from './component/ourservices/ourservices.component';
import { PagenotfoundComponent } from './component/pagenotfound/pagenotfound.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgetpasswordComponent,
    RegisterComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    OurprogramComponent,
    OurservicesComponent,
    PagenotfoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
