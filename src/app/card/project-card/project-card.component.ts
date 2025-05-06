import { Component } from '@angular/core';
import { ProjectDetailsService } from '../../services/project-details.service';
import { NgIf } from '@angular/common';
import { Project } from '../../interface/project';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-project-card',
  imports: [NgIf],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css',
})
export class ProjectCardComponent {
  projectDetails: Project[] = [];
  selectedProject: Project | undefined;
  constructor(private projectDetailsService: ProjectDetailsService) {}
  ngOnInit() {
    this.getProject();
  }
  getProject() {
    this.projectDetailsService
      .getProjectDetails()
      .subscribe((data: Project[]) => {
        this.projectDetails = data;
      });
  }

  deleteProject(id: string) {
    this.projectDetailsService.deleteProject(id).subscribe((data: Project) => {
      this.getProject();
    });
  }

  selectProject(project: Project) {
    this.projectDetailsService.setSelectedProject(project);
  }
}
