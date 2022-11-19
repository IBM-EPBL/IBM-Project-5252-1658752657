import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  productsList:any = [];
  constructor(
    private productServe: ProductService,
  ) { }

  ngOnInit(): void {
    this.getProducts();
  }

  async getProducts(): Promise<void>{
    try {
      this.productsList = await this.productServe.getProducts();
      console.log(this.productsList);
    } catch (error) {
      console.log(error);
    }
  }


}
