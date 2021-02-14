import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { PresentationComponent } from './presentation/presentation.component';
import { ComponentsComponent } from './components/components.component';

const routes: Routes = [
  { path: 'presentation', redirectTo: '', pathMatch: 'full' },
  { path: '', component: PresentationComponent },
  { path: 'components', component: ComponentsComponent }
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
