import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  target: string = '';
  registerDatas: any;

  get first_name() {
    return this.registrationForm.get('first_name');
  }
  get last_name() {
    return this.registrationForm.get('last_name');
  }
  get email() {
    return this.registrationForm.get('email');
  }
  get password() {
    return this.registrationForm.get('password');
  }
  constructor(
    private fb: FormBuilder,
    public spinner: NgxSpinnerService,
    private registerData: UserService
  ) {}

  ngOnInit(): void {}

  registrationForm = this.fb.group({
    first_name: ['', [Validators.required, Validators.minLength(3)]],
    last_name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
  });

  onSubmit() {
    this.spinner.show();
    this.registerData.register(this.registrationForm.value).subscribe((res: any) => {
      setTimeout(() => {
        this.spinner.hide();
      }, 1000);
      this.registerDatas = res;
      if (res.code == 1) {
        this.target =
          '<div class="alert alert-success">Success!' + res.message + '</div>';
      } else if (res.code == 2) {
        this.target =
          '<div class="alert alert-danger">Error!' + res.message + '</div>';
      }
    });
  }
}
