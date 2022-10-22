import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  registerData: any;
  loginData: any;
  private API_URL = environment.API_URL;

  constructor(private _httpRequest: HttpClient) {}

  // getLoginData() {
  //   return this.loginData = this._httpRequest.get(this.API_URL + 'getLoginData');
  // }

  login(data: any): Observable<any> {
    return this._httpRequest.post(this.API_URL + 'login', data);
  }
  register(data: any): Observable<any> {
    return this._httpRequest.post(this.API_URL + 'register', data);
  }
}
