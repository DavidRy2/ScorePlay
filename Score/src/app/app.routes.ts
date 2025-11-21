import { Routes } from '@angular/router';
import { Inicio } from './inicio/inicio';
import { Login } from './login/login';

export const routes: Routes = [
  { path: '', component: Login },   // LOGIN primeiro!
  { path: 'home', component: Inicio } // Home só depois de logar
];
