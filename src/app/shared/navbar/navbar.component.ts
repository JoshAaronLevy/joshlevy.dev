import { Component, OnInit, ElementRef } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { DialogService, DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ContactComponent } from 'app/components/contact/contact.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: [
    DialogService,
    DynamicDialogConfig,
    ContactComponent
  ]
})
export class NavbarComponent implements OnInit {
  ref: DynamicDialogRef;
  private toggleButton: any;
  private sidebarVisible: boolean;

  constructor(
    public location: Location,
    private element: ElementRef,
    public dialogService: DialogService,
    public config: DynamicDialogConfig
    ) {
    this.sidebarVisible = false;
  }

  ngOnInit() {
    const navbar: HTMLElement = this.element.nativeElement;
    this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
  }

  openContactModal() {
    this.ref = this.dialogService.open(ContactComponent, {
      width: '50%'
    });
  }

  sidebarOpen() {
    const toggleButton = this.toggleButton;
    const html = document.getElementsByTagName('html')[0];
    setTimeout(function () {
      toggleButton.classList.add('toggled');
    }, 500);
    html.classList.add('nav-open');

    this.sidebarVisible = true;
  };

  sidebarClose() {
    const html = document.getElementsByTagName('html')[0];
    this.toggleButton.classList.remove('toggled');
    this.sidebarVisible = false;
    html.classList.remove('nav-open');
  };

  sidebarToggle() {
    if (this.sidebarVisible === false) {
      this.sidebarOpen();
    } else {
      this.sidebarClose();
    }
  };

  isHome() {
    var titlee = this.location.prepareExternalUrl(this.location.path());

    if (titlee === '/home') {
      return true;
    }
    else {
      return false;
    }
  }

  isDocumentation() {
    var titlee = this.location.prepareExternalUrl(this.location.path());
    if (titlee === '/documentation') {
      return true;
    }
    else {
      return false;
    }
  }
}
