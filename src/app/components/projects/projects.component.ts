import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'app/services/project.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  providers: [MessageService]
})
export class ProjectsComponent implements OnInit {
  loadingProjects: boolean;
  loadingError: boolean;
  projects: any;
  markerColor: any;

  constructor(
    public projectService: ProjectService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.loadingProjects = true;
    this.loadingError = false;
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
      } else {
        this.loadingProjects = false;
        this.loadingError = true;
        this.showGetError();
      }
    });
  }

  showGetError() {
    this.messageService.add({
      severity: 'error'
    });
  }
}
