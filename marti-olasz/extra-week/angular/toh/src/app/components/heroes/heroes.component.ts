import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-heroes',
	templateUrl: './heroes.component.html',
	styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
	@Input() hero: { name: string; id: number };
	@Output() heroChange = new EventEmitter();

	constructor() {}

  ngOnInit(): void {}

  save(){
    this.heroChange.emit('save clicked')
  }
}
