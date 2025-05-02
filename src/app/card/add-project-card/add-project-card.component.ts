import { NgIf } from '@angular/common';
import { Component, VERSION } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-project-card',
  imports: [FormsModule, NgIf],
  templateUrl: './add-project-card.component.html',
  styleUrl: './add-project-card.component.css',
})
export class AddProjectCardComponent {
  constructor(private router: Router) {}
  projectDetails = {};
  addProject(values: any) {}
  cancelAddition() {
    this.router.navigate(['/dashboard/category']);
  }
  selectedImage: string | ArrayBuffer | null = null;

  onImageSelected(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.selectedImage = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }
}
