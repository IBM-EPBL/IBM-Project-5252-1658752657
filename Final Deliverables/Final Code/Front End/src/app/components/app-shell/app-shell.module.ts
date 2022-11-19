import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppShellComponent } from './app-shell.component';
import { RouterModule } from '@angular/router';
import { NavBarModule } from '../nav-bar/nav-bar.module';
import { FooterModule } from '../footer/footer.module';



@NgModule({
  declarations: [AppShellComponent],
  imports: [
    CommonModule,
    RouterModule,
    NavBarModule,
    FooterModule
  ],
  exports: [
    AppShellComponent
  ]
})
export class AppShellModule { }
