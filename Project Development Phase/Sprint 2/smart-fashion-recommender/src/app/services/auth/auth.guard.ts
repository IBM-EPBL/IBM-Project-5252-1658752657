import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad, CanActivate {

  isAdmin = true;
  isLoggedIn = true;
  constructor(
    private router: Router,
  ) {

  }

  async canLoad(
    route: Route,
    segments: UrlSegment[]): Promise<boolean> {

    const isGoingToLoginPage = route.path === 'login' || 'signup';

    if (!this.isLoggedIn && !isGoingToLoginPage) {
      this.router.navigate(['/login']);
      return false;
    }

    if (this.isLoggedIn && isGoingToLoginPage) {
      // redirecting user to respective home pages if they try to navigate to login page
      if (this.isAdmin) {
        this.router.navigate(['/admin']);
      } else {
        this.router.navigate(['/']);
      }

      return false;
    }

    if (this.isLoggedIn && this.isAdmin) {
      this.router.navigate(['admin']);
      return false;
    }

    return true;
  }


  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): | Promise<boolean | UrlTree> {
    const isGoingToLoginPage = route.url.some(data => data.path.includes('login'));

    if (!this.isLoggedIn && !isGoingToLoginPage) {
      this.router.navigate(['/login']);
      return false;
    }

    if (this.isLoggedIn && isGoingToLoginPage) {
      // redirecting user to respective home pages if they try to navigate to login page
      if (this.isAdmin) {
        this.router.navigate(['/admin']);
      } else {
        this.router.navigate(['/']);
      }

      return false;
    }

    if (this.isLoggedIn && this.isAdmin) {
      this.router.navigate(['admin']);
      return false;
    }

    return true;
  }

}
