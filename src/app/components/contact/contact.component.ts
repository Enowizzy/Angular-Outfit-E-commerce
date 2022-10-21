import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    public spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    /** spinner starts on init */
    this.spinner.show();

    this.contactData1 = this.contactData.getContactData();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 1000);
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
        this.target =
          '<div class="alert alert-success">Success!' + res.message + '</div>';
          this.route.navigate(['/contacted']);

      } else if (res.code == 2) {
        this.target =
          '<div class="alert alert-danger">Error!' + res.message + '</div>';
      }
    });
  }


}
