import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListToolComponent }    from './list.tool.component';
import { DetailToolComponent }  from './detail-tool.component';
import { EditToolComponent } from './edit-tool.component';

import { AuthGuard } from '../auth-guard.service';

// les routes du module route
const pokemonsRoutes: Routes = [
	{
		path:'tool',
		canActivate:[AuthGuard],
		children: [
			{ path: 'all', component: ListToolComponent },
			{ path: 'edit/:id', component: EditToolComponent, canActivate:[AuthGuard] },
			{ path: ':id', component: DetailToolComponent }
		]
	}
	
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