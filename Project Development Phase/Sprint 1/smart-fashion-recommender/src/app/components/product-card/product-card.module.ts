import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './product-card.component';



@NgModule({
  declarations: [ProductCardComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ProductCardComponent
  ]
})
export class ProductCardModule { }
