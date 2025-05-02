import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-dashboard-header',
  imports: [RouterLinkActive],
  templateUrl: './dashboard-header.component.html',
  styleUrl: './dashboard-header.component.css',
})
export class DashboardHeaderComponent {
  constructor(private router: Router) {}
  planogram() {
    this.router.navigate(['/dashboard/planogram']);
  }
  category() {
    this.router.navigate(['/dashboard/category']);
  }
  users() {
    this.router.navigate(['/dashboard/users']);
  }
  skus() {
    this.router.navigate(['/dashboard/skus']);
  }
  compliance() {
    this.router.navigate(['/dashboard/compliance']);
  }
}
