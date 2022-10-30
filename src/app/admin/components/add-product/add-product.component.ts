import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

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

  changeText() {
    this.addProduct = 'Submitting Product...';
  }

  get name() {
    return this.submitProductForm.get('name');
  }
  get brand() {
    return this.submitProductForm.get('brand');
  }
  get category() {
    return this.submitProductForm.get('category');
  }
  get quantity() {
    return this.submitProductForm.get('quantity');
  }
  get description() {
    return this.submitProductForm.get('description');
  }
  get images() {
    return this.submitProductForm.get('images');
  }
  get cost() {
    return this.submitProductForm.get('cost');
  }
  get price() {
    return this.submitProductForm.get('price');
  }

  constructor(
    private fb: FormBuilder,
    public spinner: NgxSpinnerService,
    private route: Router
  ) {}

  ngOnInit(): void {}

  submitProductForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    brand: ['', [Validators.required]],
    category: ['', [Validators.required]],
    quantity: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
    description: ['', [Validators.required]],
    images: ['', [Validators.required]],
    cost: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
    price: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
  });

  public productSubmit(): void {
    console.log(this.submitProductForm.value);
  }
}
