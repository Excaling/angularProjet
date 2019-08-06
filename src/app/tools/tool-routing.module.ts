import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListToolComponent }    from './list.tool.component';
import { DetailToolComponent }  from './detail-tool.component';
import { EditToolComponent } from './edit-tool.component';
// les routes du module route
const pokemonsRoutes: Routes = [
	{ path: 'tools', component: ListToolComponent },
	{ path: 'tool/edit/:id', component: EditToolComponent },
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