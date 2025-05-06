import { NgIf } from '@angular/common';
import { Component, VERSION } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ProjectDetailsService } from '../../services/project-details.service';
import { Project } from '../../interface/project';

@Component({
  selector: 'app-add-project-card',
  imports: [FormsModule, NgIf],
  templateUrl: './add-project-card.component.html',
  styleUrl: './add-project-card.component.css',
})
export class AddProjectCardComponent {
  constructor(
    private router: Router,
    private projectDetailsService: ProjectDetailsService
  ) {}
  addProjectDetails = {
    name: '',
    description: '',
    image: '' as string | null | ArrayBuffer,
  };
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

  projectDetails: Project[] = [];
  selectedProject: Project | undefined;

  getProject() {
    this.projectDetailsService
      .getProjectDetails()
      .subscribe((data: Project[]) => {
        this.projectDetails = data;
      });
  }

  addProject(project: Project) {
    if (!this.selectedProject) {
      this.projectDetailsService
        .addProject(project)
        .subscribe((project: Project) => {
          if (project) {
            this.getProject();
          }
        });
    } else {
      const projectData = { ...project, id: this.selectedProject.id };
      this.projectDetailsService
        .updateProject(projectData)
        .subscribe((data: Project) => {
          this.getProject();
        });
    }
    this.router.navigate(['/dashboard']);
  }
}
