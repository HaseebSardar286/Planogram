import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-category',
  imports: [FormsModule],
  templateUrl: './create-category.component.html',
  styleUrl: './create-category.component.css',
})
export class CreateCategoryComponent {
  constructor(private router: Router) {}
  userDetails = {};
  addCategory(values: any) {}
  removeMenu() {
    this.router.navigate(['/dashboard/category']);
  }
}
