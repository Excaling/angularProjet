import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { Tool } from './tool';
import { TOOLS } from './TOOLS';

import {Router } from '@angular/router';

@Component({
  selector: 'list-tool',
  templateUrl: './list.tool.component.html',
  styleUrls: ['../app.component.css']
})
export class ListToolComponent implements OnInit {
  title = 'Tools hacking';
  private toolsList: Tool[];
  private value: string;
  private values: string = '';

  private age: number = 12; 

  constructor(private router: Router){}

  ngOnInit(){
    this.toolsList = TOOLS;
    this.value = null;
  }

  onDisplayTool(pTool: Tool){
    console.log("Vous avez cliqué sur le tool " + pTool.name);
    let link = ['/tool', pTool.id];
    this.router.navigate(link);
  }
} 