import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserDetailsService } from '../../services/user-details.service';

@Component({
  selector: 'app-add-user',
  imports: [FormsModule],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css',
})
export class AddUserComponent {
  constructor(
    private router: Router,
    private userDetailsService: UserDetailsService
  ) {}
  userDetails = {
    userName: '',
    userEmail: '',
    userRole: '',
  };
  removeMenu() {
    this.router.navigate(['/dashboard/users']);
  }
  addUser(values: any) {
    this.userDetails.userName = values.name;
    this.userDetails.userEmail = values.email;
    this.userDetails.userRole = values.role;
    this.userDetailsService.setUserDetails(this.userDetails);
    this.router.navigate(['/dashboard/users']);
  }
}
