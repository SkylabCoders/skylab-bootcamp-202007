import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.sass']
})
export class AppComponent {
	title = 'angular-practice';
	showTitle = true;
	//directira estructural nfIf, si el valor de arriba esta false,
	//contenido X no se muestra en el html

	getTitle() {
		return this.title;
	}

	getArray() {
		return [
			{ id: 1, name: 'alguien' },
			{ id: 2, name: 'bombas' },
			{ id: 3, name: 'fuckyou' }
		];
	}
}
