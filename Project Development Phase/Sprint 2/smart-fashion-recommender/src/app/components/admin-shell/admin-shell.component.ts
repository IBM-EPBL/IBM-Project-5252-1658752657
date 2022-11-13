import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-shell',
  templateUrl: './admin-shell.component.html',
  styleUrls: ['./admin-shell.component.scss']
})
export class AdminShellComponent implements OnInit {
  showNav = true;
  constructor() { }

   toggleNav(): void {
    this.showNav = !this.showNav;
   }

  ngOnInit(): void {
  }

}
