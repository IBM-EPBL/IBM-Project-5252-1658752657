import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from 'src/app/services/category/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  showAddCategory = false;
  addCategory: FormGroup;
  successMessage = '';
  categoryList: any = [];
  constructor(
    private fb: FormBuilder,
    private categoryServe: CategoryService,
  ) {
    this.addCategory = this.fb.group({
      category: ['', [Validators.required]],
    })
  }

  ngOnInit(): void {
    this.getCategorys();
  }


  async createCategory(): Promise<void> {
    try {
      await this.categoryServe.createCategory(this.addCategory.value);
      this.setMessage('successfully added');
      this.showAddCategory = false;
      this.getCategorys();
      this.addCategory.reset();
    } catch (error) {
      console.log(error);
      this.setMessage('fail to added');
    }
  }
  // set error messages
  setMessage(message: any): void {
    this.successMessage = message;
    setTimeout(() => {
      this.successMessage = '';
    }, 2000);
  };

  toggleAddCategory(): void {
    this.showAddCategory = !this.showAddCategory;
  }

  // get category list

  async getCategorys(): Promise<void> {
    try {
      this.categoryList = await this.categoryServe.getCategory();
    } catch (error) {
      console.log(error);
    }
  }

  // delete category
  async deleteCategory(id: any): Promise<void> {
    try {
      await this.categoryServe.deleteCategory(id);
      this.getCategorys();
      this.setMessage("successfully Deteted");
    } catch (error) {
      console.log(error);
      this.setMessage("Fail to delete")
    }
  }

}
