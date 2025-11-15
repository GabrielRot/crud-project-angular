import { Routes } from '@angular/router';
import { SignUp } from './pages/login/sign-up/sign-up';
import { SignIn } from './pages/login/sign-in/sign-in';
import { Login } from './pages/login/login';

export const routes: Routes = [
  {
    path: 'login',
    component: Login,
    children: [
      { path: 'sign-in', component: SignIn },
      { path: 'sign-up', component: SignUp },
      { path: '', redirectTo: 'sign-in', pathMatch: 'full' }
    ]
  },
  { path: 'sign-up', component: SignUp, pathMatch: 'full' },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' },
];