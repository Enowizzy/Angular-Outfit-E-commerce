import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgxSpinnerModule } from "ngx-spinner";
import {  CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { ViewContactsComponent } from './components/view-contacts/view-contacts.component';
import { AdminComponent } from './admin/admin.component';
import { AdminRoutingComponents, AdminRoutingModule } from './admin-routing.module';


@NgModule({
  declarations: [
    AdminComponent,
    ViewContactsComponent,
    AdminRoutingComponents
  ],
  imports: [
    FormsModule,
    BrowserModule,
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
