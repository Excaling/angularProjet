import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Tool } from './tool';
import { ToolsService } from './tools.service';

@Component({
  selector: 'edit-tool',
  template: `
    <h2 class="header center">Editer {{ tool?.name }}</h2>
		<p class="center">
			<img *ngIf="pokemon" [src]="tool.picture"/>
		</p>
    <tool-form [tool]="tool"></tool-form>
  `,
})
export class EditToolComponent implements OnInit {

  tool: Tool = null;

  constructor(
    private route: ActivatedRoute,
    private toolService: ToolsService) {}

  ngOnInit(): void {
    let id = +this.route.snapshot.params['id'];
    this.tool = this.toolService.getTool(id);
  }

}