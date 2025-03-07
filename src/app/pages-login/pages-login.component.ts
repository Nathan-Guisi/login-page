import { Component } from '@angular/core';
import { DefaultLoginLayoutComponent } from '../components/default-login-layout/default-login-layout.component';

@Component({
  selector: 'app-pages-login',
  imports: [
    DefaultLoginLayoutComponent
  ],
  templateUrl: './pages-login.component.html',
  styleUrl: './pages-login.component.scss'
})
export class PagesLoginComponent {

}
