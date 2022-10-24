import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  contactData:any;
  private API_URL = environment.API_URL;
  constructor(private _httpRequest: HttpClient) {}

  getContactData() {
    return this.contactData = this._httpRequest.get(this.API_URL + 'getContact');
  }
  storeContactData(data: any) {
    return this._httpRequest.post(this.API_URL + 'storeContact', data);
  }
  deleteContact(id: number): Observable<Object>{
    return this._httpRequest.delete(this.API_URL + 'deleteContact/'+id);
  }
}
