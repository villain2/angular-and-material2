import { Component, OnInit } from '@angular/core';
import { MATERIAL_DIRECTIVES } from 'ng2-material/';

@Component({
  moduleId: module.id,
  selector: 'app-first-page',
  templateUrl: 'first-page.component.html',
  styleUrls: ['first-page.component.css'],
  directives: [MATERIAL_DIRECTIVES]
})
export class FirstPageComponent implements OnInit {
	googleUrl: string = 'http://www.google.com';
	isDisabled: boolean = true;

  constructor() {}

  ngOnInit() {
  }

}
