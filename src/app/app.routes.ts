import { authGuard } from './core/auth/guards/auth.guard';
import { Routes } from '@angular/router';
import { SignUp } from './pages/login/sign-up/sign-up';
import { SignIn } from './pages/login/sign-in/sign-in';
import { Login } from './pages/login/login';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Providers } from './pages/providers/providers';

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
  {
    path: 'home',
    component: Home,
    canActivate: [authGuard],
    children: [
      { path: 'providers', component: Providers },
      { path: 'about', component: About },
    ]
  },
  { path: 'sign-up', component: SignUp, pathMatch: 'full' },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' },
];
