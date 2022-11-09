import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trending-section',
  templateUrl: './trending-section.component.html',
  styleUrls: ['./trending-section.component.scss']
})
export class TrendingSectionComponent implements OnInit {

  productDatails = [
    {
      title: 'Stylish Elegant Men Tshirts',
      price: '120',
      delivery: 'Free Delivery',
      rating: '4.0',
      reviews: '444',
      image: '/assets/products/1.jpg'
    },
    {
      title: 'MY Tshirts',
      price: '320',
      delivery: '10 day Delivery',
      rating: '3.2',
      reviews: '444',
      image: '/assets/products/2.jpg'
    },
    {
      title: 'Elegant Men Tshirts',
      price: '820',
      delivery: 'Free Delivery',
      rating: '3.0',
      reviews: '4474',
      image: '/assets/products/3.jpg'
    },
    {
      title: 'Stylish Elegant Men Tshirts',
      price: '120',
      delivery: 'Free Delivery',
      rating: '4.0',
      reviews: '444',
      image: '/assets/products/4.jpg'
    },
    {
      title: 'Stylish Elegant Men Tshirts',
      price: '120',
      delivery: 'Free Delivery',
      rating: '4.0',
      reviews: '444',
      image: '/assets/products/5.jpg'
    },
    {
      title: 'Stylish Elegant Men Tshirts',
      price: '120',
      delivery: 'Free Delivery',
      rating: '4.0',
      reviews: '444',
      image: '/assets/products/6.jpg'
    }]
  constructor() { }

  ngOnInit(): void {
  }

}
