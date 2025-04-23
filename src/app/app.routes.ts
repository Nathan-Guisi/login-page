import { Routes } from '@angular/router';
import { PagesLoginComponent } from './pages/login/pages-login.component';
import { SignUpComponent } from './pages/signup/pages-signup.component';

export const routes: Routes = [
    {
        path: "login",
        component: PagesLoginComponent
    },

    {
        path: "signup",
        component: SignUpComponent
    }
];
