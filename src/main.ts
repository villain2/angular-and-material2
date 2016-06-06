import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { SecondProjectAppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(SecondProjectAppComponent, [ROUTER_PROVIDERS]);
