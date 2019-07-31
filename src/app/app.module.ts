import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {BorderCardDirective } from './border-card.directive';

import {ToolTypeColorPipe} from './tool-type-color.pipe';
import {TextTypeColor } from './color-text-type.directive';

import { AppRoutingModule } from './app-routing.module';

import {ListToolComponent} from './list.tool.component';
import {DetailToolComponent} from './detail-tool.component';
import { PageNotFoundComponent } from './page-not-found.component'

@NgModule({
  declarations: [
    AppComponent, 
    BorderCardDirective, 
    ToolTypeColorPipe,
    TextTypeColor, 
    ListToolComponent,
    DetailToolComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
