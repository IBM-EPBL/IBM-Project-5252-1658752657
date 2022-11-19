import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-trending-section',
  templateUrl: './trending-section.component.html',
  styleUrls: ['./trending-section.component.scss']
})
export class TrendingSectionComponent implements OnInit {
  productDatails: any = [];
  constructor(
    private productServe: ProductService,
  ) { }

  ngOnInit(): void {
    this.getProducts();
  }

  async getProducts(): Promise<void> {
    try {
      const data = await this.productServe.getProducts();
      this.productDatails = data.slice(0, 6)
    } catch (error) {
      console.log(error);
    }
  }
}