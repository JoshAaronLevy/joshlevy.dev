import { Component, OnInit, OnDestroy } from '@angular/core';
import { SkillService } from 'app/services/skill.service';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss']
})
export class PresentationComponent implements OnInit, OnDestroy {
  date: Date = new Date();
  skills: any;
  skill: any;
  filter: any;
  filteredSkills: any;
  allSelected: boolean = true;
  frontEndSelected: boolean = false;
  backEndSelected: boolean = false;

  constructor(
    public skillService: SkillService
  ) {}

  ngOnInit() {
    this.filter = 'All';
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('presentation-page');
    // const navbar = document.getElementsByTagName('nav')[0];
    // navbar.classList.add('navbar-transparent');
    this.getSkills();
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

  ngOnDestroy() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('presentation-page');
    // const navbar = document.getElementsByTagName('nav')[0];
    // navbar.classList.remove('navbar-transparent');
  }
}
