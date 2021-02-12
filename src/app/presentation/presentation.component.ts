import { Component, OnInit, OnDestroy } from '@angular/core';
import { SkillService } from 'app/services/skill.service';
import { PrimeIcons } from 'primeng/api';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss']
})
export class PresentationComponent implements OnInit, OnDestroy {
  events: any;
  date: Date = new Date();
  skills: any;
  skill: any;
  filter: any;
  filteredSkills: any;
  allSelected = true;
  frontEndSelected = false;
  backEndSelected = false;

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
    this.events = [
      {status: 'Ordered', date: '15/10/2020 10:30', icon: PrimeIcons.SHOPPING_CART, color: '#9C27B0', image: 'game-controller.jpg'},
      {status: 'Processing', date: '15/10/2020 14:00', icon: PrimeIcons.COG, color: '#673AB7'},
      {status: 'Shipped', date: '15/10/2020 16:15', icon: PrimeIcons.ENVELOPE, color: '#FF9800'},
      {status: 'Delivered', date: '16/10/2020 10:00', icon: PrimeIcons.CHECK, color: '#607D8B'}
    ];
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
