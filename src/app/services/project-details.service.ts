import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../interface/project';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ProjectDetailsService {
  private baseUrl = 'http://localhost:3000/projects';
  constructor(private http: HttpClient, private router: Router) {}

  addProject(projectDetails: {}): Observable<Project> {
    return this.http.post<Project>(this.baseUrl, projectDetails);
  }
  getProjectDetails(): Observable<Project[]> {
    return this.http.get<Project[]>(this.baseUrl);
  }

  deleteProject(id: string): Observable<Project> {
    return this.http.delete<Project>(this.baseUrl + '/' + id);
  }
  updateProject(project: Project): Observable<Project> {
    return this.http.put<Project>(this.baseUrl + '/' + project.id, project);
  }
  selectProject(id: string): Observable<Project> {
    return this.http.get<Project>(this.baseUrl + '/' + id);
  }

  private selectedProject: Project | null = null;

  setSelectedProject(project: Project) {
    this.selectedProject = project;
    localStorage.setItem('selectedProject', JSON.stringify(project));
    this.router.navigate(['/dashboard']);
  }

  getSelectedProject(): Project | null {
    if (!this.selectedProject) {
      const stored = localStorage.getItem('selectedProject');
      this.selectedProject = stored ? JSON.parse(stored) : null;
    }
    return this.selectedProject;
  }
}
