import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-planogram',
  imports: [FormsModule, NgIf],
  templateUrl: './create-planogram.component.html',
  styleUrl: './create-planogram.component.css',
})
export class CreatePlanogramComponent {
  constructor(private router: Router) {}
  addPlanogram(values: any) {}
  removeMenu() {
    this.router.navigate(['/dashboard/planogram']);
  }
  selectedStatus: string = '';

  dropdownOpen = false;

  selectStatus(status: string) {
    this.selectedStatus = status;
  }
  toggleDropDown() {
    this.dropdownOpen = !this.dropdownOpen;
  }
}
