import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  imports: [FormsModule],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css',
})
export class AddUserComponent {
  constructor(private router: Router) {}
  userDetails = {};
  addUser(values: any) {}
  removeMenu() {
    this.router.navigate(['/dashboard/users']);
  }
}
