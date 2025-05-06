import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { User } from '../interface/user';

@Component({
  selector: 'app-register',
  imports: [FormsModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  userRegisterDetails: User = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  };
  constructor(private auth: AuthService, private router: Router) {}
  ngOnInit() {}
  registerUser() {
    this.auth.registerUser(this.userRegisterDetails).subscribe({
      next: (res) => {
        console.log('User registered successfully', res);
        localStorage.setItem('token', res.token);
        this.router.navigate(['/login']);
      },
      error: (err) => {
        console.error('Registration failed', err);
      },
    });
  }
}
