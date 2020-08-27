class Student {
	public fullName: string;
	// es una inyeccón de dependencias
	constructor(
		// las propiedades por defecto son publicas pero lo tienes que especificar igualmente, también lo puedes hacer private
		public firstName: string,
		public middleInitial: string,
		public lastName: string
	) {
		this.fullName = `${firstName} ${middleInitial} ${lastName}`;
	}
}

// Persona o Object con la inicial en mayuscula es el contructor del objeto genérico de js
interface Person {
	firstName: string;
	lastName: string;
}
// greeter recibe una persona pero estamos creando un estudiante
// Decimos que creamos un student de tipo Person porque el objeto resultante tienes las mismas propiedades
// este . string despues de person: Person se refiere al retorno de la fn que tiene que ser una string
function greeter(person: Person): string {
	return `Hello ${person.firstName} ${person.lastName}`;
}
const user = new Student('Gilberto', 'V', 'Cao');

// estudiante es de tipo Person porque tiene firstName i lastName
document.getElementById('title').innerText = greeter(user);
