import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  isMobileNavOpen = false;
  constructor() { }
  // mobile nav
  toggleMobileNav(): void {
    this.isMobileNavOpen = !this.isMobileNavOpen;
  }
  ngOnInit(): void {
  }

}
