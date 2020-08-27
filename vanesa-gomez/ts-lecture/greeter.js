var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName, address) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.address = address;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
var Address = /** @class */ (function () {
    function Address(country, cp, city) {
        this.country = country;
        this.cp = cp;
        this.city = city;
    }
    return Address;
}());
var Person = /** @class */ (function () {
    function Person(firstName, lastName, address) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
    }
    return Person;
}());
function greeter(person) {
    console.log(person);
    return "Hello " + person.firstName + " " + person.lastName;
}
var myAddress = new Address('Bcn', 08026, 'Barcelona');
var user = new Student('Vanesa', 'C', 'Gómez', myAddress);
document.getElementById('title').innerText = greeter(user);
