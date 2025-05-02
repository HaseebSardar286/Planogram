import { Component } from '@angular/core';
import { ProjectCardComponent } from '../card/project-card/project-card.component';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [ProjectCardComponent, RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  constructor(private router: Router) {}
  addProject() {
    this.router.navigate(['/dashboard/addProject']);
  }
}
