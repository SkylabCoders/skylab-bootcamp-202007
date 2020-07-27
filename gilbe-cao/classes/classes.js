class Animal {
	constructor(name) {
		this.name = name;
	}

	speak() {
		console.log(this.name + ' makes noise!');
	}
}

class Dog extends Animal {
	constructor(name, raza) {
		super(name);
		this.raza = raza;
	}

	speak() {
		console.log(this.name + ' makes guau guau!');
	}
}

class Cat extends Animal {
	constructor(name) {
		super(name);
	}

	speak() {
		super.speak();
		console.log(this.name + ' makes miau miau!');
	}
}

class PerroSato extends Dog {
	constructor(name) {
		super(name);
	}

	numberOfPulgas = 1000000;
}

const dog = new PerroSato('Lolo');
dog.speak();
console.log(dog.numberOfPulgas);
