import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SettingsService } from '../settings/settings.service';
import { lastValueFrom } from 'rxjs';
import { TokenService } from '../token/token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private settings: SettingsService,
    private router: Router,
    private token: TokenService,
  ) {
  }

  login(data: any): Promise<any> {
    const url = `${this.settings.API_BASE_URL}/auth/login`;
    return lastValueFrom(this.http.post(url, data))
  }

  signup(data: any): Promise<any> {
    const url = `${this.settings.API_BASE_URL}/auth/register`;
    return lastValueFrom(this.http.post<any>(url, data))
  }


  getUserDetails(): Promise<any> {
    const url = `${this.settings.API_BASE_URL}/me`;
    return lastValueFrom(this.http.get(url))
  }


  isLoggedIn() {
    return this.token.isTokenExist();
  }

  isAdmin(){
    return this.token.isAdmin();
  }

  logout() {
    this.token.removeToken();
    this.router.navigate(['/login']);
  }

  ngOnInit() {
  }

}
