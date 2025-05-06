import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserDetailsService {
  userDetails: any;
  setUserDetails(users: any) {
    this.userDetails = users;
    localStorage.setItem('userdetails', JSON.stringify(users));
  }
  getUserDetails() {
    if (!this.userDetails) {
      const stored = localStorage.getItem('userDetails');
      this.userDetails = stored ? JSON.parse(stored) : null;
    }
    return this.userDetails;
  }
}
