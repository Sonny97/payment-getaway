import { Component, OnInit } from '@angular/core';
import { UserService } from 'app/login/services/user.service';
import { Router } from '@angular/router';
import { ProductInterationService } from 'app/services/productInteration.service';

declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/overview', title: 'Resumen', icon: 'list', class: '' },
  { path: '/purchases', title: 'Compras', icon: 'shopping_basket', class: '' },
  { path: '/sales', title: 'Ventas', icon: 'store', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor(
    private userService: UserService,
    private router: Router,){ }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);    
  }
  isMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  };

  logOut() {
    this.userService.deleteUserLoggedIn();
    this.router.navigateByUrl('/login');
}
}
