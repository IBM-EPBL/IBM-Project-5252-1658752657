import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  // isAdmin = true;
  // isLoggedIn = false;
  constructor(
    private router: Router,
    private authServe: AuthService,
  ) {

  }


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const isGoingToLoginPage = route.url.some(data => data.path.includes('login'));
    const isAdminRelatedPage = route.url[0]?.path === 'admin'

    if (!this.authServe.isLoggedIn() && !isGoingToLoginPage) {
      this.router.navigate(['/login']);
      return false;
    }

    if (this.authServe.isLoggedIn() && isGoingToLoginPage) {
      if (this.authServe.isAdmin()) {
        this.router.navigate(['/admin'])
        return false;
      }
    }
console.log(this.authServe.isAdmin(), '-------------');

    if (this.authServe.isLoggedIn() && isAdminRelatedPage && !this.authServe.isAdmin()) {
      this.router.navigate(['/']);
      return false;
    }

    if (this.authServe.isLoggedIn() && this.authServe.isAdmin() && !isAdminRelatedPage) {
      this.router.navigate(['/admin']);
      return false;
    }

    return true;


  }
}

