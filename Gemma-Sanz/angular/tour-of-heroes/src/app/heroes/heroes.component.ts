import { Component } from '@angular/core';
import { HEROES } from '../mock-heroes';
import Hero from '../hero';

@Component({
	selector: 'app-heroes',
	templateUrl: './heroes.component.html',
	styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent {
	hero: Hero;
	heroes = HEROES;

	itemClick(event) {
		console.log('clicked!');
	}
}
