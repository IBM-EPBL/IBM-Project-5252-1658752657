import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() product: any;
  BASE_URL: any = 'http://127.0.0.1:5000/uploads/';
  constructor(
  ) {
  }




  ngOnInit(): void {
  }

}
