import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  isAdmin = true;
  isLoggedIn = true;
  constructor(
    private router: Router,
  ) {

  }


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const isGoingToLoginPage = route.url.some(data => data.path.includes('login'));
    const isAdminRelatedPage = route.url[0]?.path === 'admin'

    if (!this.isLoggedIn && !isGoingToLoginPage) {
      this.router.navigate(['/login']);
      return false;
    }

    if (this.isLoggedIn && isGoingToLoginPage) {
      if (this.isAdmin) {
        this.router.navigate(['/admin'])
        return false;
      }
    }

    if (this.isLoggedIn && isAdminRelatedPage && !this.isAdmin) {
      this.router.navigate(['/']);
      return false;
    }

    if (this.isLoggedIn && this.isAdmin && !isAdminRelatedPage) {
      this.router.navigate(['/admin']);
      return false;
    }

    return true;


  }
}

