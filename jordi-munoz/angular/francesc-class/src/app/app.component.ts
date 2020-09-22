import { Component } from '@angular/core';

let message: string = 'holaaaa';
console.log(message);

interface Product {
	name: string;
	age: number;
}
let object: Product = { name: 'jordi', age: 36 };

console.log(object.name);

let array: (number | string)[] = [1, 2, 3, '4'];

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'francesc-class';
}
