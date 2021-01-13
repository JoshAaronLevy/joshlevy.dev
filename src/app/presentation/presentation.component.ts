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

  constructor(
    public skillService: SkillService
  ) {}

  ngOnInit() {
    this.filter = 'All';
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('presentation-page');
    const navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.add('navbar-transparent');
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
      if (this.filter !== 'All') {
        if (this.skills[i].type === this.filter) {
          this.filteredSkills.push(this.skills[i]);
        }
      }
      else {
        this.filteredSkills.push(this.skills[i]);
      }
    }
    console.log(this.filteredSkills);
  }

  ngOnDestroy() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('presentation-page');
    const navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.remove('navbar-transparent');
  }
}
