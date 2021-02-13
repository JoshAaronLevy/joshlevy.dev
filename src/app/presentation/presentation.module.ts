import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

import { PrimeNGBundleModule } from '../primeng.module';

import { PresentationComponent } from './presentation.component';
import { SkillsComponent } from 'app/components/skills/skills.component';
import { ProjectsComponent } from 'app/components/projects/projects.component';
import { WorkHistoryComponent } from 'app/components/work-history/work-history.component';
import { ResumeComponent } from 'app/components/resume/resume.component';
import { ContactComponent } from 'app/components/contact/contact.component';
import { HeroComponent } from 'app/components/hero/hero.component';

@NgModule({
    imports: [
      CommonModule,
      BrowserModule,
      FormsModule,
      RouterModule,
      NgbModule,
      PrimeNGBundleModule
    ],
    declarations: [
      PresentationComponent,
      HeroComponent,
      SkillsComponent,
      ProjectsComponent,
      WorkHistoryComponent,
      ResumeComponent,
      ContactComponent
    ],
    exports: [
      PresentationComponent,
      HeroComponent,
      SkillsComponent,
      ProjectsComponent,
      WorkHistoryComponent,
      ResumeComponent,
      ContactComponent
    ],
    providers: []
})
export class PresentationModule { }
