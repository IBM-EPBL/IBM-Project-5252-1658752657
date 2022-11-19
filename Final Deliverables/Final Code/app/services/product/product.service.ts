import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { SettingsService } from '../settings/settings.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http: HttpClient,
    private settings: SettingsService,
  ) { }

  // creating new product
  createProduct(data: any): Promise<any> {
    const url = `${this.settings.API_BASE_URL}/product/create`;
    return lastValueFrom(this.http.post(url, data))
  }

  // get list
  getProducts(): Promise<any>{
    const url = `${this.settings.API_BASE_URL}/product/get`;
    return lastValueFrom(this.http.get(url))
  }

  getProductById(id:any): Promise<any>{
    const url = `${this.settings.API_BASE_URL}/product/${id}`;
    return lastValueFrom(this.http.get(url))
  }
}
