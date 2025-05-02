import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  imports: [],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css',
})
export class CategoryComponent {
  constructor(private router: Router) {}
  createCategory() {
    this.router.navigate(['/dashboard/createCategory']);
  }
}
