import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.scss']
})
export class ViewProductComponent implements OnInit {

  productID = '';
  productDetails:any;
  constructor(
    private route: ActivatedRoute,
    private productServe: ProductService
  ) {
    this.productID = this.route.snapshot.paramMap.get('id') ?? '';
  }

  // get details

async getProductDetails(): Promise<void>{
  try {
    this.productDetails = await this.productServe.getProductById(this.productID);
  } catch (error) {
    console.log(error);
    
  }
}

  ngOnInit(): void {
    this.getProductDetails();
  }

}
