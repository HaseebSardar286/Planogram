import { Component } from '@angular/core';
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterLinkActive,
} from '@angular/router';
import { ProjectDetailsService } from '../services/project-details.service';
import { Project } from '../interface/project';

@Component({
  selector: 'app-dashboard-header',
  imports: [RouterLinkActive],
  templateUrl: './dashboard-header.component.html',
  styleUrl: './dashboard-header.component.css',
})
export class DashboardHeaderComponent {
  projectName: string = '';

  constructor(
    private router: Router,
    private projectDetailsService: ProjectDetailsService,
    private route: ActivatedRoute
  ) {}
  planogram() {
    this.router.navigate(['/dashboard/planogram']);
  }
  category() {
    this.router.navigate(['/dashboard/category']);
  }
  users() {
    this.router.navigate(['/dashboard/users']);
  }
  skus() {
    this.router.navigate(['/dashboard/skus']);
  }
  compliance() {
    this.router.navigate(['/dashboard/compliance']);
  }
  projectDetails: Project[] = [];
  ngOnInit(): void {
    const selected = this.projectDetailsService.getSelectedProject();
    this.projectName = selected ? selected.name : 'No project selected';
  }
  getProject() {
    this.projectDetailsService
      .getProjectDetails()
      .subscribe((data: Project[]) => {
        this.projectDetails = data;
      });
  }
}
