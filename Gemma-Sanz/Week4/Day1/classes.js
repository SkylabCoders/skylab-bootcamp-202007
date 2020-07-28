/* function Rectangle(width, height){
    this.width = width;
    this.height = height;
}
 */

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.height * this.width;
    }
    static getClassName() {
        return "This is a rectangle!";
    }
}
const rect = new Rectangle(10, 5);
console.log(rect.getArea()); // no es static. Podemos acceder a él a través de otra instancia
console.log(Rectangle.getClassName()); //es static, tenemos que acceder a él a través de la clase en si
Rectangle.prop = "un cambio"
console.log(Rectangle.prop);

// Other example
class Animal {
    speak() {
        return this;
    }
    static eat() {
        return this;
    }
}

let animal = new Animal();
console.log(animal.speak());
//Cuando asignamos fn a una variable peierde la referencia del obj y retorna undefined
console.log("")

let speak = animal.speak;
console.log(speak());

console.log(Animal.eat());
let eat = Animal.eat;
console.log(eat());

//Other example
console.log("")
class Animal2 {
    constructor(name) {
        this.name = name;
    }
    speak() {
        return this.name + " makes noise!";
    };
}

class Dog extends Animal2 {
    constructor(name) {
        super.name = name;
    }
    speak() {
        return this.name + " makes guau guau!";
    };
}

const dog = new Animal2("Lolo");
console.log(dog.speak());

const cat = new Animal2("Misu");
console.log(cat.speak());

//
class Cat {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} makes a noise.`)
    }
}

class Lion extends Cat {
    speak() {
        console.log(`${this.name} makes a noise.`)
    }
}