import { NgIf } from '@angular/common';
import { Component, ElementRef, ViewChild, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxFileDropEntry, NgxFileDropModule } from 'ngx-file-drop';
@Component({
  selector: 'app-create-compliance',
  imports: [FormsModule, NgIf, NgxFileDropModule],
  templateUrl: './create-compliance.component.html',
  styleUrl: './create-compliance.component.css',
})
export class CreateComplianceComponent {
  constructor(private router: Router) {}
  projectDetails = {};
  addProject(values: any) {}
  cancelAddition() {
    this.router.navigate(['/dashboard/compliance']);
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

  selectedStatus: string = '';
  selectedStatusCategory: string = '';
  dropdownOpen = false;
  dropdownOpenCategory = false;
  selectStatus(status: string) {
    this.selectedStatus = status;
  }
  toggleDropDown() {
    this.dropdownOpen = !this.dropdownOpen;
  }
  toggleDropDownCategory() {
    this.dropdownOpenCategory = !this.dropdownOpenCategory;
  }
  selectStatusCategory(status: string) {
    this.selectedStatusCategory = status;
  }

  imagePreviewUrl: null | string = null;
  @ViewChild('fileInput') fileInputRef!: ElementRef;
  public dropped(files: NgxFileDropEntry[]) {
    for (const droppedFile of files) {
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => this.previewImage(file));
      }
    }
  }
  public fileBrowseHandler(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.previewImage(file);
    }
  }
  private previewImage(file: File) {
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreviewUrl = reader.result as string;
    };
    reader.readAsDataURL(file);
  }
}
