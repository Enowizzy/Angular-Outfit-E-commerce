import { Component, OnInit } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: any;
  product_list: any;
  constructor(
    private toast: NgToastService,
    public getProducts: ProductService
  ) {}

  ngOnInit(): void {
    this.product_list = this.getProducts.getProducts();
    this.productList();
  }

  productList() {
    this.getProducts.getProducts().subscribe((list) => {
      this.products = list;
    });
  }
}
