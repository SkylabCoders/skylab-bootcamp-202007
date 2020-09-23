import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Hero from 'src/app/hero';
import { HeroService } from 'src/app/hero.service';

@Component({
	selector: 'app-heroes',
	templateUrl: './heroes.component.html',
	styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent {
	selectedHero: Hero;
	heroes = this.heroService.getHeroes();

	constructor(
		public heroService: HeroService,
		private messageService: MessageService
	) {}

	onSelect(hero) {
		this.messageService.addMessage(hero.id);
		this.selectedHero = hero;
	}
}
