import { Component, OnInit } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';
import Swal from 'sweetalert2';
// import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-view-contacts',
  templateUrl: './view-contacts.component.html',
  styleUrls: ['./view-contacts.component.css'],
})
export class ViewContactsComponent implements OnInit {
  contactData1: any;
  contactDatas: any;
  user = new Contact();
  target: string = '';
  constructor(
    public contactData: ContactService,
    private toast: NgToastService
  ) {}

  ngOnInit(): void {
    this.contactData1 = this.contactData.getContactData();
    this.getContact();
  }

  getContact() {
    this.contactData.getContactData().subscribe((res) => {
      this.contactDatas = res;
    });
  }
  storeContact() {
    this.contactData.storeContactData(this.user).subscribe((res: any) => {
      this.contactDatas = res;
      if (res.code == 1) {
        this.target =
          '<div class="alert alert-success">Success!' + res.message + '</div>';
      } else if (res.code == 2) {
        this.target =
          '<div class="alert alert-danger">Error!' + res.message + '</div>';
      }
      this.getContact();
    });
  }

  deleteContact(id: number) {
    Swal.fire({
      title: 'Are you sure want to remove?',
      text: 'You will not be able to recover this record!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it',
    }).then((result) => {
      if (result.value) {
        Swal.fire('Deleted!', 'Your record has been deleted.', 'success');
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'Your imaginary file is safe :)', 'error');
      }
    });
    return this.contactData.deleteContact(id).subscribe((res: any) => {
      this.getContact();
      if (res.code == 1) {
        this.toast.success({
          detail: 'Success Message',
          summary: "record deleted successful",
          duration: 5000,
        });
       
      } else if (res.code == 2) {
        this.toast.error({
          detail: 'Error Message',
          summary: "record not found",
          duration: 5000,
        });
      }
    });
  }
}
