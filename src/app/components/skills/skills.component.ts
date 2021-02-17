import { Component, OnInit } from '@angular/core';
import { SkillService } from 'app/services/skill.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  providers: [
    MessageService
  ]
})
export class SkillsComponent implements OnInit {
  loadingSkills: boolean;
  loadingError: boolean;
  skills: any;
  skill: any;
  filter: any;
  filteredSkills: any;
  allSelected = true;
  frontEndSelected = false;
  backEndSelected = false;
  first = 0;
  rows = 12;

  constructor(
    public skillService: SkillService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.loadingSkills = true;
    this.loadingError = false;
    this.getSkills();
  }

  getSkills() {
    return this.skillService.getSkills().subscribe(data => {
      if (data) {
        this.loadingSkills = false;
        this.skills = data.skills;
        this.filterSkills(this.filter);
        console.log(this.skills[0]);
      } else {
        this.loadingSkills = false;
        this.loadingError = true;
        this.showGetError();
      }
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

  next() {
    this.first = this.first + this.rows;
  }

  prev() {
      this.first = this.first - this.rows;
  }

  reset() {
      this.first = 0;
  }

  isLastPage(): boolean {
      return this.filteredSkills ? this.first === (this.filteredSkills.length - this.rows): true;
  }

  isFirstPage(): boolean {
      return this.filteredSkills ? this.first === 0 : true;
  }

  showGetError() {
    this.messageService.add({
      severity: 'error'
    });
  }
}
