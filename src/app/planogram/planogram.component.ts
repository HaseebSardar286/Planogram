import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-planogram',
  imports: [NgIf],
  templateUrl: './planogram.component.html',
  styleUrl: './planogram.component.css',
})
export class PlanogramComponent {
  selectedStatus: string = '';

  dropdownOpen = false;

  selectStatus(status: string) {
    this.selectedStatus = status;
  }
  toggleDropDown() {
    this.dropdownOpen = !this.dropdownOpen;
  }
  constructor(private router: Router) {}
  addPlanogram() {
    this.router.navigate(['/dashboard/createPlanogram']);
  }
}
