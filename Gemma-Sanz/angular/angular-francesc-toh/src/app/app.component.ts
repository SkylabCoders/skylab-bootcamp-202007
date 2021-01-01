import { Component } from '@angular/core';

let message: string = 'Hello';

console.log(message);

interface Person {
	name: string;
	age: number;
}

let test: Person = { name: 'John', age: 33 };
let test2: Person[] = [{ name: 'Jud', age: 1 }];
let bigObject: Person[] = [
	{ name: 'yo', age: 1 },
	{ name: 'tu', age: 0 }
];

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'angular-francesc-toh';
}
