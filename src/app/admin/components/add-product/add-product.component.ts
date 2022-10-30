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
  constructor(
    private fb: FormBuilder,
    public spinner: NgxSpinnerService,
    private route: Router
  ) {}

  public submitProductForm = new FormGroup({});

  ngOnInit(): void {}

  public productSubmit(): void {}
}
