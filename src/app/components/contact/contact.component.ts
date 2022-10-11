import { Component, OnInit } from '@angular/core';
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
  constructor(
    private contactData: ContactService
  ) {}

  ngOnInit(): void {
    this.contactData1 = this.contactData.getContactData();
  }

  getContact() {
    this.contactData.getContactData().subscribe(res => {
      this.contactDatas = res;
    });
  }
  storeContact() {
    this.contactData.storeContactData(this.user).subscribe((res) => {
      this.contactDatas = res;
    });
  }
}
