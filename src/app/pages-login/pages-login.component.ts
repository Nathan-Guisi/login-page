import { Component } from '@angular/core';
import { DefaultLoginLayoutComponent } from '../components/default-login-layout/default-login-layout.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-pages-login',
  imports: [
    DefaultLoginLayoutComponent, ReactiveFormsModule
  ],
  templateUrl: './pages-login.component.html',
  styleUrl: './pages-login.component.scss'
})
export class PagesLoginComponent {
  loginForm!: FormGroup;

  constructor(){
    this.loginForm = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required, Validators.minLength(6)]),
    })
  }

}
