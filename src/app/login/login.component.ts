import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { loginUser } from '../interface/loginUser';

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginUserDetails: loginUser = {
    email: '',
    password: '',
  };
  constructor(private auth: AuthService, private router: Router) {}
  ngOnInit() {}
  loginUser() {
    this.auth.loginUser(this.loginUserDetails).subscribe({
      next: (res) => {
        console.log('Login successfull', res);
        localStorage.setItem('token', res.token);
        this.router.navigate(['/dashboard']);
      },
      error: (err) => {
        console.log('Login Failed', err);
      },
    });
  }
}
