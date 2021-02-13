import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

import { PrimeNGBundleModule } from '../primeng.module';

import { PresentationComponent } from './presentation.component';
import { WorkHistoryComponent } from 'app/components/work-history/work-history.component';

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
      WorkHistoryComponent
    ],
    exports: [
      PresentationComponent,
      WorkHistoryComponent
    ],
    providers: []
})
export class PresentationModule { }
