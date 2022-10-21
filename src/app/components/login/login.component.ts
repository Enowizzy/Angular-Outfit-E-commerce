import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  target: string = '';
  loginDatas: any;

  get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }
  constructor(private fb:FormBuilder,
    public spinner: NgxSpinnerService,
    private loginData: UserService
    ) { }

  ngOnInit(): void {
  }

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
  });

  onSubmit(){
    this.spinner.show();
    this.loginData.register(this.loginForm.value).subscribe((res: any) => {
      setTimeout(() => {
        this.spinner.hide();
      }, 1000);
      this.loginDatas = res;
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
