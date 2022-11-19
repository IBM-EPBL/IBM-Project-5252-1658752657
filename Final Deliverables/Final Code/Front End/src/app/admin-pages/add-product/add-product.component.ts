import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category/category.service';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  categoryList: any = [];
  addProductForm: FormGroup;
  constructor(
    private categoryServe: CategoryService,
    private fb: FormBuilder,
    private productServe: ProductService,
    private router: Router,
  ) {
    this.addProductForm = this.fb.group({
      product_name: ['', [Validators.required]],
      category: ['', [Validators.required]],
      description: ['', [Validators.required]],
      stock: ['', [Validators.required]],
      price: ['', [Validators.required]],
    })
  }

  ngOnInit(): void {
    this.getCategoryList();
  }

  // get list
  async getCategoryList(): Promise<void> {
    try {
      this.categoryList = await this.categoryServe.getCategory();
    } catch (error) {
      console.log(error);

    }
  }

  // create product
  async createProduct(): Promise<void> {
    try {
      const data = await this.productServe.createProduct(this.addProductForm.value);
      console.log(data);
      this.router.navigate(['/admin'])
    } catch (error) {
      console.log(error);
    }
  }

}
