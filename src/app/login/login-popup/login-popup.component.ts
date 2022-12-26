import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/auth.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-popup',
  templateUrl: './login-popup.component.html',
  styleUrls: ['./login-popup.component.scss'],
  providers: [AuthenticationService]
})

export class LoginPopupComponent implements OnInit {
  // signupdata = {
  //   "name": "colgate",
  //   "alias": "ronafate",
  //   "password": "123456",
  //   "email": "dabur@gmail.com"
  // }
  signupForm: FormGroup;
  loginForm: FormGroup;
  method = 'login';
  message = "";
  constructor(private authservice: AuthenticationService, private formBuilder: FormBuilder, private router: Router) {
    if (authservice.isLoggedIn()) {
      this.router.navigate(['/'])

    }
    if (this.router.url == '/login') {
      this.method = 'login';
      this.createLoginForm();
    } else {
      this.method = 'signup';
      this.createSignupForm();
    }
    console.log(this.method);
  }
  signupUser() {
    if (!this.signupForm.errors) {
      let signupData: SignUpData = this.signupForm.value;
      this.authservice.signup(signupData).subscribe(data => {
        console.log(data);
        this.method = 'login';
      })

    }
  }

  ngOnInit() {
  }

  loginUser() {
    let loginData: LoginData = this.loginForm.value;
    this.authservice.login(loginData).subscribe((data: any) => {
      if (data.error) {
        this.message = "Incorrect Credentials";
      }
      else{
        console.log(data);
        this.authservice.setCredentials(data);
        window.location.reload();
  
      }
    })
  }

  createLoginForm() {
    this.loginForm = this.formBuilder.group({
      username: ['ronafate', [Validators.required, Validators.email]],
      password: ['123456', Validators.required]
    });
  }

  createSignupForm() {
    this.signupForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      alias: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
    });
  }

}


interface SignUpData {
  name: string;
  alias: string;
  password: string;
  email: string;
}

interface LoginData {
  username: string;
  password: string;
}

