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
      { path: 'cart', loadChildren: () => import('./pages/cart/cart.module').then(m => m.CartModule) },
    ],
  },
  {
    path: 'admin',
    component: AdminShellComponent,
    canActivate: [AdminGuard],
    children: [
      { path: '', loadChildren: () => import('./admin-pages/product-list/product-list.module').then(m => m.ProductListModule) },
      { path: 'orders', loadChildren: () => import('./admin-pages/orders/orders.module').then(m => m.OrdersModule) },
      { path: 'add-product', loadChildren: () => import('./admin-pages/add-product/add-product.module').then(m => m.AddProductModule) },
      { path: 'category', loadChildren: () => import('./admin-pages/category/category.module').then(m => m.CategoryModule) },
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
