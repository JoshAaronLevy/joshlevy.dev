import { Component, OnInit, OnDestroy } from '@angular/core';
import { ContactComponent } from 'app/components/contact/contact.component';
import { JobService } from 'app/services/job.service';
import { ProjectService } from 'app/services/project.service';
import { SkillService } from 'app/services/skill.service';
import { PrimeIcons } from 'primeng/api';
import { DialogService, DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss'],
  providers: [
    DialogService,
    DynamicDialogConfig
  ]
})
export class PresentationComponent implements OnInit, OnDestroy {
  events1: any;
  date: Date = new Date();
  skills: any;
  skill: any;
  projects: any;
  filter: any;
  filteredSkills: any;
  jobs: any;
  allSelected = true;
  frontEndSelected = false;
  backEndSelected = false;
  responsibilities: any;
  displayModal: boolean;
  ref: DynamicDialogRef;

  constructor(
    public skillService: SkillService,
    public projectService: ProjectService,
    public jobService: JobService,
    public dialogService: DialogService,
    public config: DynamicDialogConfig
  ) { }

  ngOnInit() {
    this.filter = 'All';
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('presentation-page');
    // const navbar = document.getElementsByTagName('nav')[0];
    // navbar.classList.add('navbar-transparent');
    this.getSkills();
    this.getProjects();
    this.getJobs();
  }

  getSkills() {
    return this.skillService.getSkills().subscribe(data => {
      this.skills = data.skills;
      this.filterSkills(this.filter);
    });
  }

  filterSkills(filter) {
    this.filter = filter;
    this.filteredSkills = [];
    for (let i = 0; i < this.skills.length; i++) {
      if (this.filter === 'Front-End') {
        this.allSelected = false;
        this.frontEndSelected = true;
        this.backEndSelected = false;
        if (this.skills[i].type === 'Front-End' || this.skills[i].type === 'Front/Back-End') {
          this.filteredSkills.push(this.skills[i]);
        }
      } else if (this.filter === 'Back-End') {
        this.allSelected = false;
        this.frontEndSelected = false;
        this.backEndSelected = true;
        if (this.skills[i].type === 'Back-End' || this.skills[i].type === 'Front/Back-End') {
          this.filteredSkills.push(this.skills[i]);
        }
      } else {
        this.allSelected = true;
        this.frontEndSelected = false;
        this.backEndSelected = false;
        this.filteredSkills.push(this.skills[i]);
      }
    }
  }

  getProjects() {
    return this.projectService.getProjects().subscribe(data => {
      this.projects = data.projects;
      this.projects.sort(function (a, b) {
        return a.id - b.id;
      });
    });
  }

  getJobs() {
    return this.jobService.getJobs().subscribe(data => {
      this.jobs = data.jobs;
      this.jobs.sort(function (a, b) {
        return a.id - b.id;
      });
      this.responsibilities = 
      console.log(this.jobs);
    });
  }

  showContactModal() {
    this.ref = this.dialogService.open(ContactComponent, {
      header: 'Contact Me',
      width: '50%'
    });
  }

  ngOnDestroy() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('presentation-page');
    // const navbar = document.getElementsByTagName('nav')[0];
    // navbar.classList.remove('navbar-transparent');
  }
}
