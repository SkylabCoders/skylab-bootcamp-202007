var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        // inyeccion de dependencias
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello " + person.firstName + " " + person.lastName;
}
var user = new Student('Fer', 'V', 'Leon');
document.getElementById('title').innerText = greeter(user);
