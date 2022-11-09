import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppShellComponent } from './components/app-shell/app-shell.component';

const routes: Routes = [
  {
    path: '',
    component: AppShellComponent,
    children: [
      { path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
      { path: 'products', loadChildren: () => import('./pages/products-list/products-list.module').then(m => m.ProductsListModule) },
    ],
  },
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
  { path: 'signup', loadChildren: () => import('./pages/signup/signup.module').then(m => m.SignupModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
