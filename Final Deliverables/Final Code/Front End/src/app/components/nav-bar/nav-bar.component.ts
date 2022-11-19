import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  isMobileNavOpen = false;
  constructor(
    private authServe: AuthService,
  ) { }
  // mobile nav
  toggleMobileNav(): void {
    this.isMobileNavOpen = !this.isMobileNavOpen;
  }

  logOut(): void {
    this.authServe.logout();
  }
  ngOnInit(): void {
  }

}
