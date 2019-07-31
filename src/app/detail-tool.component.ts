import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Tool } from './tool';
import { TOOLS } from './TOOLS';

@Component({
	selector: 'detail-tool',
	templateUrl: './detail-tool.component.html'
})
export class DetailToolComponent implements OnInit {

	tools: Tool[] = null;
	tool: Tool = null;

	constructor(private route: ActivatedRoute, private router: Router) {}
    //route permet de get les params, et routeur permet de faire de redirections  vers une route
	ngOnInit(): void {
		this.tools = TOOLS;

		let id = +this.route.snapshot.paramMap.get('id'); //snapshot synchrone (le + set de cast en integer)
		for (let i = 0; i < this.tools.length; i++) {
			if (this.tools[i].id == id) {
				this.tool = this.tools[i];
			}
		}
	}

	goBack(): void {
        this.router.navigate(['/tools']); //navigate est mieux que history back
        
        //window.history.back();
	}

}