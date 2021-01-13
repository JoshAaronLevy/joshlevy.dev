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

  constructor(
    public skillService: SkillService
  ) {}

  ngOnInit() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('presentation-page');
    const navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.add('navbar-transparent');
    this.getSkills();
  }

  getSkills() {
    return this.skillService.getSkills().subscribe(data => {
      this.skills = data.skills;
      console.log(this.skills);
    });
  }

  ngOnDestroy() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('presentation-page');
    const navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.remove('navbar-transparent');
  }
}
