import { Component } from '@angular/core';
import { MATERIAL_DIRECTIVES, MATERIAL_PROVIDERS } from 'ng2-material';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { Routes } from '@angular/router';
import { FirstPageComponent } from './+first-page';
import { SecondPageComponent } from './+second-page';
import { ThirdPageComponent } from './+third-page';
import { FourthPageComponent } from './+fourth-page/';



@Component({
	moduleId: module.id,
	selector: 'second-project-app',
  templateUrl: 'second-project.component.html',
  styleUrls: ['second-project.component.css'],
  directives: [FirstPageComponent, 
  SecondPageComponent, 
  ThirdPageComponent, 
  FourthPageComponent,
  ROUTER_DIRECTIVES],
  providers: [
  	ROUTER_PROVIDERS
  ]
})

@RouteConfig([
		{ path: '/', name: 'Home', component: FirstPageComponent},
		{ path: '/first-page', name: 'First', component: FirstPageComponent },
		{ path: '/second-page', name: 'Second', component: SecondPageComponent },
		{ path: '/third-page', name: 'Third', component: ThirdPageComponent },
		{ path: '/fourth-page', name: 'Fourth', component: FourthPageComponent }
])

export class SecondProjectAppComponent {
	title = 'AngularJS 2.0 Router and Navigation Test.';
	public cb1 = true;
	public cb2 = false;
	public cb3 = false;
	public cb4 = true;
	public cb5 = false;
}