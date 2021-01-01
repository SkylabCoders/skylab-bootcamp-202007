import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	// title es una propiedad de la classe
	title = 'Tour of Heroes';
	/* 
	onSave(event) {
		alert(event.name);
	} */
}
