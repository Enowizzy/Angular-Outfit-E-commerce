import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgxSpinnerModule } from "ngx-spinner";
import {  CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { ViewContactsComponent } from './components/view-contacts/view-contacts.component';
import { AdminRoutingComponents, AdminRoutingModule } from './admin-routing.module';
import { TopNavbarComponent } from './components/top-navbar/top-navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { AdminComponent } from './components/admin/admin.component';
import { ContentWrapperComponent } from './components/content-wrapper/content-wrapper.component';
import { RightSidebarComponent } from './components/right-sidebar/right-sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { NgToastModule } from 'ng-angular-popup';


@NgModule({
  declarations: [
    ViewContactsComponent,
    AdminRoutingComponents,
    TopNavbarComponent,
    SidebarComponent,
    AdminHomeComponent,
    AdminComponent,
    ContentWrapperComponent,
    RightSidebarComponent,
    FooterComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    NgToastModule,
    HttpClientModule,
    NgxSpinnerModule,
    ReactiveFormsModule,
    AdminRoutingModule,
    BrowserAnimationsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AdminComponent]
})
export class AdminModule { }
