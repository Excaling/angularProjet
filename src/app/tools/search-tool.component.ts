import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Observable, Subject, of } from 'rxjs';

import { ToolsService } from './tools.service';
import { Tool } from './tool';
 
@Component({
	selector: 'tool-search',
	templateUrl: './search-tool.component.html'
})
export class SearchToolComponent implements OnInit {
 
	private searchTerms = new Subject<string>();
	tools$: Observable<Tool[]>;
 
	constructor(
		private toolsService: ToolsService,
		private router: Router) { }
 
	// Ajoute un terme de recherche dans le flux de l'Observable 'searchTerms'
	search(term: string): void {
		this.searchTerms.next(term);
	}
 
	ngOnInit(): void {
		this.tools$ = this.searchTerms.pipe(
			// attendre 300ms de pause entre chaque requête
			debounceTime(300),
			// ignorer la recherche en cours si c'est la même que la précédente
			distinctUntilChanged(),
			// on retourne la liste des résultats correpsondant aux termes de la recherche
			switchMap((term: string) => this.toolsService.searchTool(term)),
		);
	}
 
	gotoDetail(tool: Tool): void {
		let link = ['/tool', tool.id];
		this.router.navigate(link);
	}
}