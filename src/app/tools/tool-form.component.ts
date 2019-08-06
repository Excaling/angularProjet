import { Component, Input, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ToolsService } from './tools.service';
import { Tool } from './tool';

@Component({
    selector: 'tool-form',
    templateUrl: './tool-form.component.html',
    styleUrls: ['./tool-form.component.css']
})
export class ToolFormComponent implements OnInit{

    @Input() tool: Tool; //Propriété d'entrée du composant
    types: Array<string>;

    constructor(private toolService: ToolsService, private router : Router){}

    ngOnInit(){
        this.types = this.toolService.getToolTypes();
    }
    // Détermine si le type passé en paramètres appartient ou non du tool en cours d'édition.
	hasType(type: string): boolean {
		let index = this.tool.type.indexOf(type);
		if (index > -1) return true;
		return false;
    }
    
    // Méthode appelée lorsque l'utilisateur ajoute ou retire un type au tool en cours d'édition.
	selectType($event: any, type: string): void {
		let checked = $event.target.checked;
		if (checked) {
			this.tool.type.push(type);
		} else {
			let index = this.tool.type.indexOf(type);
			if (index > -1) {
				this.tool.type.splice(index, 1);
			}
		}
    }
	
	isTypesValide(pType: string) :boolean{
		if(this.tool.type.length >= 3 && !this.hasType(pType)){
			return false;
		}
		return true;
	}

    // Valide le nombre de types pour chaque tool
	isTypesValid(type: string): boolean {
		if (this.tool.type.length === 1 && this.hasType(type)) {
			return false;
		}
		if (this.tool.type.length >= 3 && !this.hasType(type)) {
			return false;
		}

		return true;
	}

	// La méthode appelée lorsque le formulaire est soumis.
	onSubmit(): void {
		console.log("Submit form !");
		let link = ['/tool', this.tool.id];
		this.router.navigate(link);
	}

}