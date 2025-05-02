import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list-skus',
  imports: [],
  templateUrl: './product-list-skus.component.html',
  styleUrl: './product-list-skus.component.css',
})
export class ProductListSKUsComponent {
  constructor(private router: Router) {}

  addSKU() {
    this.router.navigate(['/dashboard/addSKU']);
  }
}
