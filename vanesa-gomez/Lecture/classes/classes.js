class Animal {
	constructor(name) {
		this.name = name;
	}

	noise() {
		return `${this.name} makes standard noise;`;
	}
}

class Dog extends Animal {
	constructor(name, color) {
		super(name);
		this.color = color;
	}
	noise() {
		console.log(`${this.name} makes guau guau`);
	}
}

class Cat extends Animal {
	constructor(name, color) {
		super(name);
		this.color = color;
	}
	noise() {
		super.noise();
		console.log(`${this.name} also makes miau miau`);
	}
}

class Perrosato extends Dog {
	constructor(name) {
		super(name);
	}
	numberOfPulgas = 10000;
}

const dog = new Perrosato('Lolo');
dog.noise();
console.log(dog.numberOfPulgas);
