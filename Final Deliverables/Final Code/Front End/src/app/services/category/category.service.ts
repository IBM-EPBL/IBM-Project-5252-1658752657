import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { SettingsService } from '../settings/settings.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private http: HttpClient,
    private settings: SettingsService,
  ) { }

  // creating new category
  createCategory(data: any): Promise<any> {
    const url = `${this.settings.API_BASE_URL}/category/create`;
    return lastValueFrom(this.http.post(url, data))
  }

  // get category
  getCategory(): Promise<any> {
    const url = `${this.settings.API_BASE_URL}/category/get`;
    return lastValueFrom(this.http.get(url))
  }

  // delete category
  deleteCategory(id: any): Promise<any> {
    const url = `${this.settings.API_BASE_URL}/category/${id}`;
    return lastValueFrom(this.http.delete(url))
  }
}
