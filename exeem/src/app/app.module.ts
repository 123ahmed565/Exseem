import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SwiperModule } from 'swiper/angular';
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
import { OurnewsComponent } from './component/ournews/ournews.component';
import { TestimonialsComponent } from './component/testimonials/testimonials.component';
import { FilterComponent } from './component/filter/filter.component';
import { ShopixComponent } from './pages/shopix/shopix.component';
import { ShopixservicesComponent } from './pages/shopixservices/shopixservices.component';

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
    OurnewsComponent,
    TestimonialsComponent,
    FilterComponent,
    ShopixComponent,
    ShopixservicesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
