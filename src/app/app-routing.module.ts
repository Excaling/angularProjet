import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { ListToolComponent } from './list.tool.component';
import { DetailToolComponent } from './detail-tool.component';
import { PageNotFoundComponent } from './page-not-found.component'
// routes
const appRoutes: Routes = [
	{ path: 'tools', component: ListToolComponent },
	{ path: 'tool/:id', component: DetailToolComponent },
	{ path: '', redirectTo: 'tools', pathMatch: 'full' },
	{ path:'**', component:PageNotFoundComponent }
];

@NgModule({
	imports: [
		RouterModule.forRoot(appRoutes)
	],
	exports: [
		RouterModule
	]
})
export class AppRoutingModule { }