import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { LandingContainerComponent } from './landing-container/landing-container.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HomeSliderComponent } from './home-slider/home-slider.component';
import { TrendingSectionComponent } from './trending-section/trending-section.component';
import { ProductCardModule } from 'src/app/components/product-card/product-card.module';

@NgModule({
  declarations: [
    HomeComponent,
    LandingContainerComponent,
    HomeSliderComponent,
    TrendingSectionComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CarouselModule,
    ProductCardModule
  ]
})
export class HomeModule { }
