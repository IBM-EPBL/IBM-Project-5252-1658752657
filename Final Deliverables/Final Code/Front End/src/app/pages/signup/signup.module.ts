import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponent } from './signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    SignupComponent
  ],
  imports: [
    CommonModule,
    SignupRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class SignupModule { }
