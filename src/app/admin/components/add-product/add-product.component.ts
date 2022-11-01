import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { Router } from '@angular/router';
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

  onSubmit(){
    this.spinner.show();
    this.storeProduct.addProduct(this.product).subscribe((res: any) => {
      setTimeout(() => {
        this.spinner.hide();
      }, 1000);
      this.productData = res;
      if (res.code == 1) {
        this.target =
          '<div class="alert alert-success">Success!' + res.message + '</div>';
          this.route.navigate(['/product-list']);

      } else if (res.code == 2) {
        this.target =
          '<div class="alert alert-danger">Error!' + res.message + '</div>';
      }
    });
  }
}
