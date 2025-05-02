import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-compliance',
  imports: [NgIf, MatDatepickerModule, MatInputModule, MatNativeDateModule],
  templateUrl: './compliance.component.html',
  styleUrl: './compliance.component.css',
})
export class ComplianceComponent {
  constructor(private router: Router) {}
  [x: string]: any;
  selectedStatus: string = '';

  dropdownOpen = false;
  startDate: Date | null = null;
  endDate: Date | null = null;
  dateRange: { start: Date | null; end: Date | null } = {
    start: null,
    end: null,
  };
  selectStatus(status: string) {
    this.selectedStatus = status;
  }
  toggleDropDown() {
    this.dropdownOpen = !this.dropdownOpen;
  }
  createCompliance() {
    this.router.navigate(['/dashboard/createCompliance']);
  }
}
