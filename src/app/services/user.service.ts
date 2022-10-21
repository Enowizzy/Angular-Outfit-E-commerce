import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  registerData:any;
  private API_URL = environment.API_URL;

  constructor(private _httpRequest: HttpClient) { }

  register(data: any) {
    return this._httpRequest.post(this.API_URL + 'register', data);
  }
  login(data: any) {
    return this._httpRequest.post(this.API_URL + 'login', data);
  }
}
