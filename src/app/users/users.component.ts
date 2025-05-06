import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserDetailsService } from '../services/user-details.service';

@Component({
  selector: 'app-users',
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent {
  userDetails: any;
  constructor(
    private router: Router,
    private userDetailsService: UserDetailsService
  ) {}

  ngOnInit() {
    this.userDetails = this.userDetailsService.getUserDetails();
  }
  addUsers() {
    this.router.navigate(['/dashboard/addUser']);
  }
}
