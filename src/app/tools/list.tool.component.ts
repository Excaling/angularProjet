import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { Tool } from './tool';
import { TOOLS } from './TOOLS';

import {Router } from '@angular/router';
import { ToolsService } from './tools.service'

@Component({
  selector: 'list-tool',
  templateUrl: './list.tool.component.html',
  styleUrls: ['../app.component.css']
})
export class ListToolComponent implements OnInit {
  title = 'Tools hacking';
  toolsList: Tool[];
  
  age: number = 12; 

  constructor(private router: Router, private pToolsService: ToolsService){
    
  }

  ngOnInit(){
    this.getTools();
  }

  getTools(){
    this.pToolsService.getTools().subscribe(tools => this.toolsList = tools);
  }

  onDisplayTool(pTool: Tool){
    console.log("Vous avez cliqué sur le tool " + pTool.name);
    let link = ['/tool', pTool.id];
    this.router.navigate(link);
  }
} 