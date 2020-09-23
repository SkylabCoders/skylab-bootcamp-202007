import { Component } from '@angular/core';

let message: string = 'hello';

interface Product { name: string, readonly age: number };

let object: { name: string, age: number } = { name: 'John', age: 12 };
let array: (number | string)[] = [1, 2, 3, '4']; 
let someArr: { name: string, age: number}[] = [{ name: 'John', age: 12 }];

console.log(object, array, someArr);

let 


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-francesc';
}
