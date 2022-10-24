import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BannerSliderComponent } from './components/banner-slider/banner-slider.component';
import { ShopWithUsComponent } from './components/shop-with-us/shop-with-us.component';
import { PhotoBannerComponent } from './components/photo-banner/photo-banner.component';
import { VideoBannerComponent } from './components/video-banner/video-banner.component';
import { EcommerceMainComponent } from './components/ecommerce-main/ecommerce-main.component';
import { ContentBannerComponent } from './components/content-banner/content-banner.component';
import { LatestPostComponent } from './components/latest-post/latest-post.component';
import { CustomerPostComponent } from './components/customer-post/customer-post.component';
import { SubscriptionComponent } from './components/subscription/subscription.component';
import { FooterComponent } from './components/footer/footer.component';
import { RegisterComponent } from './components/register/register.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ContactedComponent } from './components/contacted/contacted.component';
import { NgxSpinnerModule } from "ngx-spinner";
import {  CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { LoginComponent } from './components/login/login.component';
import { AdminModule } from './admin/admin.module';
import { NgToastModule } from 'ng-angular-popup';

@NgModule({
  declarations: [
    AppComponent,
    BannerSliderComponent,
    ShopWithUsComponent,
    PhotoBannerComponent,
    VideoBannerComponent,
    EcommerceMainComponent,
    ContentBannerComponent,
    LatestPostComponent,
    CustomerPostComponent,
    SubscriptionComponent,
    FooterComponent,
    RegisterComponent,
    routingComponents,
    ContactComponent,
    AboutComponent,
    NavbarComponent,
    PageNotFoundComponent,
    HomeComponent,
    HeaderComponent,
    ContactedComponent,
    LoginComponent,
  ],
  imports: [
    AdminModule,
    FormsModule,
    BrowserModule,
    NgToastModule,
    HttpClientModule,
    AppRoutingModule,
    NgxSpinnerModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
