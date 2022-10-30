import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CategoryBrand } from '../Interfaces/category-brand';

@Injectable({
  providedIn: 'root'
})
export class CategoryBrandService {
  private API_URL = environment.API_URL;
  constructor(private _httpRequest: HttpClient) { }

  getCategoryBrands(): Observable<any> {
    return this._httpRequest.get(this.API_URL + 'getCategoryBrand');
  }
}
