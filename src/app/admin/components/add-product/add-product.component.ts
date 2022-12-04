import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { NgxSpinnerService } from 'ngx-spinner';
import { Product } from 'src/app/models/product';
import { CategoryBrandService } from 'src/app/services/category-brand.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {
  addProduct = 'add product';
  color: ThemePalette = 'accent';
  checked = false;
  disabled = false;
  selectedValue: string = '';
  categoryBrands: any;
  brands: any;
  sub_categories: any;
  categories: any;
  product = new Product();
  productData: any;
  target: string = '';
  filedata: any;

  changeText() {
    this.addProduct = 'Submitting Product...';
  }

  fileEvent(e: any) {
    this.filedata = e.target.files[0];
  }

  constructor(
    private fb: FormBuilder,
    public storeProduct: ProductService,
    public spinner: NgxSpinnerService,
    private toast: NgToastService,
    private categoryBrand: CategoryBrandService,
    private route: Router,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.categoryBrands = this.categoryBrand.getCategoryBrands();
    this.getCategoryBrands();
  }

  getCategoryBrands() {
    this.categoryBrand.getCategoryBrands().subscribe((res) => {
      this.brands = res.brand;
      this.categories = res.category;
      this.sub_categories = res.sub_category;
    });
  }

  storeProducts() {
    this.spinner.show();
    this.storeProduct.addProduct(this.product).subscribe((res: any) => {
      setTimeout(() => {
        this.spinner.hide();
      }, 1000);
      this.productData = res;
      if (res.code == 1) {
        this.toast.success({
          detail: 'Success Message',
          summary: res.message,
          duration: 3000,
        });
        // this.route.navigate(['/admin/product-list']);
      } else if (res.code == 2) {
        this.spinner.hide();
        this.toast.error({
          detail: 'Error Message',
          summary: res.message,
          duration: 3000,
        });
      }
    });
  }

  onSubmit(f: NgForm) {
    /** spinner starts on init */
    this.spinner.show();
    setTimeout(() => {
      var myFormData = new FormData();
      const headers = new HttpHeaders();
      headers.append('Content-Type', 'multipart/form-data');
      headers.append('Accept', 'application/json');
      myFormData.append('images', this.filedata);
      myFormData.append('data', JSON.stringify(this.product));
      this.http
        .post('http://127.0.0.1:8000/api/addProduct', myFormData, {
          headers: headers,
        })
        .subscribe((data: any) => {
          if (data.code == 1) {
            this.toast.success({
              detail: 'Success Message',
              summary: data.message,
              duration: 3000,
            });
            // this.route.navigate(['/admin/product-list']);
          } else {
            this.toast.error({
              detail: 'Success Message',
              summary: data.message,
              duration: 3000,
            });
          }
        });

      this.spinner.hide();
    }, 3000);
  }
}
