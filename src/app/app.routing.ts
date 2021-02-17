import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { PresentationComponent } from './presentation/presentation.component';
import { ComponentsComponent } from './components/components.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { WorkHistoryComponent } from './components/work-history/work-history.component';
import { ResumeComponent } from './components/resume/resume.component';
import { HeroComponent } from './components/hero/hero.component';

const routes: Routes = [
  { path: '', component: PresentationComponent },
  // { path: '', component: HeroComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'experience', component: WorkHistoryComponent },
  { path: 'resume', component: ResumeComponent }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: false,
      relativeLinkResolution: 'legacy'
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
