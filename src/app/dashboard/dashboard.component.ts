import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { DashboardHeaderComponent } from '../dashboard-header/dashboard-header.component';
import { CategoryComponent } from '../category/category.component';
import { filter } from 'rxjs';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [
    HeaderComponent,
    SidebarComponent,
    RouterOutlet,
    DashboardHeaderComponent,
    NgIf,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  showDashboardHeader = true;

  hiddenLayoutRoutes: string[] = [
    '/dashboard/changePassword',
    '/dashboard/addProject',
  ];

  constructor(private router: Router) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.showDashboardHeader = !this.hiddenLayoutRoutes.includes(
          event.urlAfterRedirects
        );
      });
  }
}
