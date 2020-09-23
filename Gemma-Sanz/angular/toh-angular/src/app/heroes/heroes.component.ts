import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
	selector: 'app-heroes',
	templateUrl: './heroes.component.html',
	styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
	selectedHero: Hero;
	heroes: Hero[] = this.heroService.getHeroes();

	constructor(
		public heroService: HeroService,
		private messageService: MessageService
	) {}

	ngOnInit() {}

	onSelect(hero: Hero): void {
		this.messageService.addMessage(`${hero.name} loaded...`);
		this.selectedHero = hero;
	}
}
