/*!

=========================================================
* Now UI Kit Pro Angular - v1.2.0
=========================================================

* Product Page: https://www.josh-levy.com/product/now-ui-kit-pro-angular
* Copyright 2019 Josh Levy (https://www.josh-levy.com)

* Coded by Josh Levy

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
