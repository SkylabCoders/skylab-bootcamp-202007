import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'toh';

	hero: { name: string; id: number } = {
		name: 'Bombasto',
		id: 13
	};

	onSave(event) {
		alert(event);
	}
}
