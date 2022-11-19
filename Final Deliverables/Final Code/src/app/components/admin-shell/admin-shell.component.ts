import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-admin-shell',
  templateUrl: './admin-shell.component.html',
  styleUrls: ['./admin-shell.component.scss']
})
export class AdminShellComponent implements OnInit {
  showNav = true;
  constructor(
    private authServe: AuthService
  ) { }

   toggleNav(): void {
    this.showNav = !this.showNav;
   }

   logout(): void {
    this.authServe.logout();
   }

  ngOnInit(): void {
  }

}
