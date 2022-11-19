import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminShellComponent } from './admin-shell.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AdminShellComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class AdminShellModule { }
