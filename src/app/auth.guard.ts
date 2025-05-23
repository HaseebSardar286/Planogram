import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private _authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this._authService.loggedIn()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
