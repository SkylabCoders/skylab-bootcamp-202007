import { Component, Input, OnInit } from '@angular/core';
import Hero from 'src/app/hero';

@Component({
	selector: 'app-details',
	templateUrl: './details.component.html',
	styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
	@Input() hero: Hero;

	constructor() {}

	ngOnInit(): void {}
}
