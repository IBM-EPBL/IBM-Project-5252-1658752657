import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppShellComponent } from './app-shell.component';
import { RouterModule } from '@angular/router';
import { NavBarModule } from '../nav-bar/nav-bar.module';



@NgModule({
  declarations: [AppShellComponent],
  imports: [
    CommonModule,
    RouterModule,
    NavBarModule
  ],
  exports: [
    AppShellComponent
  ]
})
export class AppShellModule { }
