import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { LandingContainerComponent } from './landing-container/landing-container.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HomeSliderComponent } from './home-slider/home-slider.component';

@NgModule({
  declarations: [
    HomeComponent,
    LandingContainerComponent,
    HomeSliderComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CarouselModule,
  ]
})
export class HomeModule { }
