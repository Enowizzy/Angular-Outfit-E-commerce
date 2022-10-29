import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  target: string = '';
  loginDatas: any;
  Login = "Sign In";

  changeText(){
    this.Login= "Signing In...";
  }

  get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }
  constructor(
    private fb: FormBuilder,
    public spinner: NgxSpinnerService,
    private loginData: UserService,
    private route: Router
  ) {}

  ngOnInit(): void {}

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
  });

  onSubmit() {
    this.spinner.show();
    this.loginData.login(this.loginForm.value).subscribe((res: any) => {
      setTimeout(() => {
        this.spinner.hide();
      }, 1000);
      this.loginDatas = res;
      if (res.code == 1) {
        this.target =
          '<div class="alert alert-success">Success!' + res.message + '</div>';
        if (res.id == 1) {
          this.route.navigate(['/admin']);
        } else {
          this.route.navigate(['/']);
        }
      } else if (res.code == 2) {
        this.target =
          '<div class="alert alert-danger">Error!' + res.message + '</div>';
      }
    });
  }
}
