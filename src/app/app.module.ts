import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { App } from './app';
import { CardSelector } from './components';
import { Api } from './services';

@NgModule({
  declarations: [
    App,
    CardSelector
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    Api
  ],
  bootstrap: [App]
})
export class AppModule { }
