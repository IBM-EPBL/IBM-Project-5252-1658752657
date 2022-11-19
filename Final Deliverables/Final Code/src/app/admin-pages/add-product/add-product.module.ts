import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddProductRoutingModule } from './add-product-routing.module';
import { AddProductComponent } from './add-product.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddProductComponent
  ],
  imports: [
    CommonModule,
    AddProductRoutingModule,
    ReactiveFormsModule
  ]
})
export class AddProductModule { }
