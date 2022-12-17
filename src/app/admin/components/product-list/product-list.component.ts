import { DialogService } from './../../../services/dialog.service';
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
    public productService: ProductService,
    private _dialogService: DialogService
  ) {}

  ngOnInit(): void {
    this.product_list = this.productService.getProducts();
    this.productList();
  }
  productList() {
    this.productService.getProducts().subscribe((list) => {
      this.products = list;
    });
  }
  onDelete(id: number) {
    this._dialogService
      .openConfirmDialog('Are you sure you want to delete this item ?')
      .afterClosed()
      .subscribe((res) => {
        if (res) {
          this.productService.deleteProduct(id).subscribe((_res: any) => {
            this.productList();
            if (_res == 1) {
              this.toast.success({
                detail: 'Success Message',
                summary: 'Product deleted successful',
                duration: 3000,
              });
            } else {
              this.toast.error({
                detail: 'Error Message',
                summary: 'Error occurred please try again later',
                duration: 3000,
              });
            }
          });
        }
      });
  }
}
