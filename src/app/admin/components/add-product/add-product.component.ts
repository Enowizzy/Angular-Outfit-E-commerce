import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  changeText() {
    this.addProduct = 'Submitting Product...';
  }

  constructor(
    private fb: FormBuilder,
    public storeProduct: ProductService,
    public spinner: NgxSpinnerService,
    private toast: NgToastService,
    private categoryBrand: CategoryBrandService,
    private route: Router
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

  urls:any = [];
  onSelect(e:any){
    if (e.target.files) {
      for (let i = 0; i < File.length; i++) {
        var reader = new FileReader();
        reader.readAsDataURL(e.target.files[i]);
        // reader.onload= e => this.urls = reader.result;
        reader.onload = (events:any)=> {
          this.urls.push(events.target.results);
        }
      }
      
    }
  }

  onSubmit() {
    // this.spinner.show();
    this.storeProduct.addProduct(this.product).subscribe((res: any) => {
      // setTimeout(() => {
      //   this.spinner.hide();
      // }, 1000);
      this.productData = res;
      if (res.code == 1) {
        this.toast.success({
          detail: 'Success Message',
          summary: res.message,
          duration: 5000,
        });
        this.route.navigate(['/admin/product-list']);
      } else if (res.code == 2) {
        this.spinner.hide();
        this.toast.error({
          detail: 'Success Message',
          summary: res.message,
          duration: 5000,
        });
      }
    });
  }
}
