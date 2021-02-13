import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { SectionsModule } from './sections/sections.module';
import { ComponentsModule } from './components/components.module';
import { ExamplesModule } from './examples/examples.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { PresentationModule } from './presentation/presentation.module';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
    declarations: [
      AppComponent,
      NavbarComponent,
      FooterComponent
    ],
    imports: [
      BrowserAnimationsModule,
      NgbModule,
      FormsModule,
      RouterModule,
      AppRoutingModule,
      PresentationModule,
      SectionsModule,
      ComponentsModule,
      ExamplesModule,
      HttpClientModule
    ],
    schemas: [
      CUSTOM_ELEMENTS_SCHEMA
    ],
    providers: [],
    bootstrap: [
      AppComponent
    ]
})
export class AppModule { }
