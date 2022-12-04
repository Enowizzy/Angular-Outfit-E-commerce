import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private API_URL = environment.API_URL;
  constructor(private _http: HttpClient) { }

  addProduct(data: any): Observable<any> {
    return this._http.post(this.API_URL + 'addProduct', data).pipe(catchError(this.handleError));
  }
  handleError(error: HttpErrorResponse) {
    return throwError(error);
  }
}
