import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminShellComponent } from './components/admin-shell/admin-shell.component';
import { AppShellComponent } from './components/app-shell/app-shell.component';
import { AdminGuard } from './services/auth/admin.guard';
import { AuthGuard } from './services/auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: AppShellComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
      { path: 'products', loadChildren: () => import('./pages/products-list/products-list.module').then(m => m.ProductsListModule) },
    ],
  },
  {
    path: 'admin',
    component: AdminShellComponent,
    canActivate: [AdminGuard],
    children: [
    ]
  },
  {
    path: 'login',
    canLoad: [AuthGuard],
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'signup',
    canLoad: [AuthGuard],
    loadChildren: () => import('./pages/signup/signup.module').then(m => m.SignupModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
