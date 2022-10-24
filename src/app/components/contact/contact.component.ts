import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { NgxSpinnerService } from 'ngx-spinner';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  contactData1: any;
  contactDatas: any;
  user = new Contact();
  target: string = '';
  constructor(
    private route: Router,
    private contactData: ContactService,
    public spinner: NgxSpinnerService,
    private toast: NgToastService
  ) {}

  ngOnInit(): void {
    this.contactData1 = this.contactData.getContactData();
  }

  getContact() {
    this.contactData.getContactData().subscribe((res) => {
      this.contactDatas = res;
    });
  }
  storeContact() {
    this.spinner.show();
    this.contactData.storeContactData(this.user).subscribe((res: any) => {
      setTimeout(() => {
        this.spinner.hide();
      }, 1000);
      this.contactDatas = res;
      if (res.code == 1) {
        this.toast.success({
          detail: 'Success Message',
          summary: res.message,
          duration: 5000,
        });
      } else if (res.code == 2) {
        this.toast.error({
          detail: 'Success Message',
          summary: res.message,
          duration: 5000,
        });
      }
    });
  }
}
