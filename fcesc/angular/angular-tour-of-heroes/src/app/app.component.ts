import { Component } from '@angular/core';
import Product from '../interfaces/interfaces';

let message: string = 'hello';
console.log(message);

// interface Product { name?: string, readonly age: number };

let object: Product = { name: 'John', age: 12 };
let array: (number | string)[] = [1, 2, 3, '4'];
let someArr: Product[] = [{ name: 'John', age: 32}];


let anotherArr: Product[] = [{ name: 'John', age: 32}, { name: 'John', age: 32}, { age:35 }];

object.name = 'Marta';

console.log(object, array, someArr, anotherArr);

function printName(name: string){
  console.log(name);
}

console.log(printName('you'));

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-tour-of-heroes';
}
