import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Tool } from './tool';
import { TOOLS } from './TOOLS';
import { ToolsService } from './tools.service';

@Component({
	selector: 'detail-tool',
	templateUrl: './detail-tool.component.html'
})
export class DetailToolComponent implements OnInit {

	tool: Tool = null;

	constructor(private route: ActivatedRoute, private router: Router,private toolsService : ToolsService) {}
    //route permet de get les params, et routeur permet de faire de redirections  vers une route
	ngOnInit(): void {

		let id = +this.route.snapshot.paramMap.get('id'); //snapshot synchrone (le + set de cast en integer)
		this.tool = this.toolsService.getTool(id);
	}

	goBack(): void {
        this.router.navigate(['/tools']); //navigate est mieux que history back
        
        //window.history.back();
	}
	goEdit(tool: Tool): void{
		this.router.navigate(['/tool/edit/' + tool.id]);
	}

}