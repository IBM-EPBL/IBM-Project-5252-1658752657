import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsListRoutingModule } from './products-list-routing.module';
import { ProductsListComponent } from './products-list.component';
import { ProductCardModule } from 'src/app/components/product-card/product-card.module';
import { ViewProductComponent } from './view-product/view-product.component';


@NgModule({
  declarations: [
    ProductsListComponent,
    ViewProductComponent
  ],
  imports: [
    CommonModule,
    ProductsListRoutingModule,
    ProductCardModule
  ]
})
export class ProductsListModule { }
