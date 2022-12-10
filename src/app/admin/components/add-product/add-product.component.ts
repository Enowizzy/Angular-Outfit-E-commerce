import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  NgForm,
  Validators,
} from '@angular/forms';
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
  brand_id: any;
  sub_category_id: any;
  category_id: any;
  product = new Product();
  productData: any;
  target: string = '';
  filedata: any;
  form: any;

  changeText() {
    this.addProduct = 'Submitting Product...';
  }

  fileEvent(e: any) {
    this.filedata = e.target.files[0];
  }

  get name() {
    return this.form.get('name');
  }
  get cost() {
    return this.form.get('cost');
  }
  get price() {
    return this.form.get('price');
  }
  get quantity() {
    return this.form.get('quantity');
  }
  get is_available() {
    return this.form.get('is_available');
  }
  get description() {
    return this.form.get('description');
  }

  constructor(
    private fb: FormBuilder,
    public storeProduct: ProductService,
    public spinner: NgxSpinnerService,
    private toast: NgToastService,
    private categoryBrand: CategoryBrandService,
    private route: Router,
    private http: HttpClient
  ) {
    this.form = this.fb.group({
      name: ['', Validators.required, Validators.minLength(3)],
      cost: ['', Validators.required, Validators.pattern('^[0-9]*$')],
      price: ['', Validators.required, Validators.pattern('^[0-9]*$')],
      brand_id: ['', Validators.required],
      quantity: ['', Validators.required, Validators.pattern('^[0-9]*$')],
      category_id: ['', Validators.required],
      description: ['', Validators.required, Validators.minLength(10)],
      is_available: ['', Validators.required],
      sub_category_id: ['', Validators.required],
      avatar: [null],
    });
  }

  ngOnInit(): void {
    this.categoryBrands = this.categoryBrand.getCategoryBrands();
    this.getCategoryBrands();
  }

  getCategoryBrands() {
    this.categoryBrand.getCategoryBrands().subscribe((res) => {
      this.brand_id = res.brand;
      this.category_id = res.category;
      this.sub_category_id = res.sub_category;
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
        this.route.navigate(['/admin/product-list']);
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

  uploadFile(event: any) {
    this.filedata = event.target.files[0];
    this.form.patchValue({
      avatar: this.filedata,
    });
  }

  submitForm() {
    var formData: any = new FormData();
    formData.append('name', this.name.value);
    formData.append('images', this.filedata);
    formData.append('cost', this.cost.value);
    formData.append('price', this.price.value);
    formData.append('quantity', this.quantity.value);
    formData.append('is_available', this.is_available.value);
    formData.append('description', this.description.value);
    formData.append('brand_id', this.form.get('brand_id').value);
    formData.append('category_id', this.form.get('category_id').value);
    formData.append('sub_category_id', this.form.get('sub_category_id').value);
    this.http.post('http://127.0.0.1:8000/api/addProduct', formData).subscribe({
      next: (response) => console.log(response),
      error: (error) => console.log(error),
    });
  }
}
