import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { LandingBannerComponent } from './landing-banner/landing-banner.component';
import { LandingContainerComponent } from './landing-container/landing-container.component';


@NgModule({
  declarations: [
    HomeComponent,
    LandingBannerComponent,
    LandingContainerComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
