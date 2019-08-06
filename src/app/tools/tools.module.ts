import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // a la place de browser module (browser module incluait deja commonModule)
//CommonModule pour tout les sous modules 
import {ListToolComponent} from './list.tool.component';
import {DetailToolComponent} from './detail-tool.component';

import {BorderCardDirective } from './border-card.directive';

import { TextTypeColor } from './color-text-type.directive';
import {ToolTypeColorPipe} from './tool-type-color.pipe';
import {ToolRoutingModule} from './tool-routing.module';

import { ToolsService } from './tools.service';

@NgModule(
    {
        imports: [
            CommonModule, 
            ToolRoutingModule
        ],

        declarations:[ListToolComponent, 
            DetailToolComponent, 
            BorderCardDirective, 
            ToolTypeColorPipe, 
            TextTypeColor],

        providers: [ ToolsService ] //Declaration des services du modules
    }
)
export class ToolsModule{}