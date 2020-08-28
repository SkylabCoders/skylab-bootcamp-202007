var Student = /** @class */ (function () {
    // es una inyeccón de dependencias
    function Student(
    // las propiedades por defecto son publicas pero lo tienes que especificar igualmente, también lo puedes hacer private
    firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
// greeter recibe una persona pero estamos creando un estudiante
// Decimos que creamos un student de tipo Person porque el objeto resultante tienes las mismas propiedades
// este . string despues de person: Person se refiere al retorno de la fn que tiene que ser una string
function greeter(person) {
    return "Hello " + person.firstName + " " + person.lastName;
}
var user = new Student('Gilberto', 'V', 'Cao');
// estudiante es de tipo Person porque tiene firstName i lastName
document.getElementById('title').innerText = greeter(user);
