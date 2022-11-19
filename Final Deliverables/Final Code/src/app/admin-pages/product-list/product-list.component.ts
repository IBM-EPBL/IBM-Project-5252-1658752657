import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
 productsList:any = [];
 BASE_URL: any = 'http://127.0.0.1:5000/uploads/';

  constructor(
    private productServe: ProductService,
  ) { }

  ngOnInit(): void {
    this.getProducts();
  }

  async getProducts(): Promise<void>{
    try {
      this.productsList = await this.productServe.getProducts();
      console.log(this.productsList, '00000000000');
      
    } catch (error) {
      console.log(error);
    }
  }


}
