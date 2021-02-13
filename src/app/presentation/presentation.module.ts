import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

import { PrimeNGBundleModule } from '../primeng.module';

import { PresentationComponent } from './presentation.component';
import { WorkHistoryComponent } from 'app/components/work-history/work-history.component';
import { ContactComponent } from 'app/components/contact/contact.component';

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
      WorkHistoryComponent,
      ContactComponent
    ],
    exports: [
      PresentationComponent,
      WorkHistoryComponent,
      ContactComponent
    ],
    providers: []
})
export class PresentationModule { }
