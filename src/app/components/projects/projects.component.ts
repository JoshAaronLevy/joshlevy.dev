import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'app/services/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  loadingProjects: boolean;
  projects: any;
  markerColor: any;

  constructor(
    public projectService: ProjectService
  ) { }

  ngOnInit(): void {
    this.loadingProjects = true;
    this.markerColor = '#ae0001';
    this.getProjects();
  }

  getProjects() {
    return this.projectService.getProjects().subscribe(data => {
      if (data) {
        this.loadingProjects = false;
        this.projects = data.projects;
        this.projects.sort(function (a, b) {
          return a.id - b.id;
        });
      }
    });
  }
}
