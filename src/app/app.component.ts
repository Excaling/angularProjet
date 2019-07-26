import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { Tool } from './tool';
import { TOOLS } from './TOOLS';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Tools hacking';
  private toolsList: Tool[];
  private value: string;
  private values: string = '';

  private age: number = 12; 

  ngOnInit(){
    this.toolsList = TOOLS;
    this.value = null;
  }

  onDisplayTool(pTool: Tool){
    console.log("Vous avez cliqué sur le tool " + pTool.name); 
  }


  /*
 onClick(){
   console.log("salope");
 }

 onKey(pValue: String){
   this.value = "Hello " + (<HTMLInputElement>event.target).value;
 }
*/
}
