import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListToolComponent }    from './list.tool.component';
import { DetailToolComponent }  from './detail-tool.component';

// les routes du module Pokémon
const pokemonsRoutes: Routes = [
	{ path: 'tools', component: ListToolComponent },
	{ path: 'tool/:id', component: DetailToolComponent }
];

@NgModule({
	imports: [
		RouterModule.forChild(pokemonsRoutes)
	],
	exports: [
		RouterModule
	]
})
export class ToolRoutingModule { }