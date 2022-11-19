import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private tokenKey = 'AUTH_TOKEN';
  private role = 'USER_ROLE';

  constructor() { }

  saveToken(data: any) {
    window.localStorage.setItem(this.tokenKey, data.token);
    window.localStorage.setItem(this.role, data.role);
  }


  getToken() {
    return window.localStorage.getItem(this.tokenKey);
  }

  getRole(){
    return window.localStorage.getItem(this.role);
  }

  isTokenExist() {
    return !!this.getToken();
  }

  isAdmin(){
    if(this.getRole() === 'user'){
      return false;
    }
    return true;
  }

  removeToken() {
    window.localStorage.removeItem(this.tokenKey);
    window.localStorage.removeItem(this.role);
  }

}
