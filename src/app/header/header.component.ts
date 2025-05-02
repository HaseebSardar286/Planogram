import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { UserDetailComponent } from '../card/user-detail/user-detail.component';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterLink, UserDetailComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  constructor(private router: Router) {}

  goToChangePassword() {
    this.router.navigate(['/dashboard/changePassword']);
  }
  dropdownOpen = false;

  toggleDropdown(): void {
    this.dropdownOpen = !this.dropdownOpen;
  }
}
