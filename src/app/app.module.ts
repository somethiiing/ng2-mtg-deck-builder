import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';

import { App } from './app';
import { CardSelector, Card } from './components';
import { Api } from './services';

@NgModule({
  declarations: [
    App,
    CardSelector,
    Card
  ],
  imports: [
    BrowserModule,
    HttpModule,
    SlimLoadingBarModule
  ],
  providers: [
    Api
  ],
  bootstrap: [App]
})
export class AppModule { }
