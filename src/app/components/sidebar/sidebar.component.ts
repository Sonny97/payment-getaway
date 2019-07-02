import { Component, OnInit } from '@angular/core';
import { UserService } from 'app/services/user.service';
import { Router } from '@angular/router';

declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/dashboard', title: 'Dashboard', icon: 'dashboard', class: '' },
  { path: '/questions', title: 'PQR', icon: 'send', class: '' },
  { path: '/products', title: 'Productos', icon: 'loyalty', class: '' },
  /* { path: '/user-profile', title: 'User Profile',  icon: 'person', class: '' },
  { path: '/notifications', title: 'Notifications',  icon: 'notifications', class: '' } */
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor(private userService: UserService, private router: Router) { }

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
