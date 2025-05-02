import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent {
  constructor(private router: Router) {}

  addUsers() {
    this.router.navigate(['/dashboard/addUser']);
  }
}
