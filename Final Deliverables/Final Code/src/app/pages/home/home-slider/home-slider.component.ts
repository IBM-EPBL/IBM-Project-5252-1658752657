import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home-slider',
  templateUrl: './home-slider.component.html',
  styleUrls: ['./home-slider.component.scss']
})
export class HomeSliderComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    items: 1,
    mouseDrag: false,
    autoplay: true,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 1000,
    responsive: {
      0: { items: 1 },
      400: { items: 1 },
      740: { items: 1 }
    },
    nav: false,
    lazyLoad: true
  };

  slides = [
   
    {
      id: '2',
      src: '/assets/home-carousel/2.webp',
    },
    {
      id: '3',
      src: '/assets/home-carousel/1.jpg',
    },
    {
      id: '5',
      src: '/assets/home-carousel/5.jpg',
    },
    {
      id: '4',
      src: '/assets/home-carousel/4.webp',
    },
    {
      id: '1',
      src: '/assets/home-carousel/3.webp',
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
