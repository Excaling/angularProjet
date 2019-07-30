import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {BorderCardDirective } from './border-card.directive';

import {ToolTypeColorPipe} from './tool-type-color.pipe';
import {TextTypeColor } from './color-text-type.directive';

@NgModule({
  declarations: [
    AppComponent, BorderCardDirective, ToolTypeColorPipe,TextTypeColor
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
