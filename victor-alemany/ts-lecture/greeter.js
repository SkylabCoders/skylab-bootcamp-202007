var Student = /** @class */ (function () {
    function Student(firstName, lastName, middleInitial) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.middleInitial = middleInitial;
        this.fullName = firstName + " " + lastName + " " + middleInitial;
    }
    return Student;
}());
function greeter(person) {
    return "Hello " + person.firstName + " " + person.lastName;
}
var user = new Student("Victor", "Alemany", "1");
var student = {
    firstName: "Victor",
    lastName: "Alemany",
    middleInitial: "1"
};
document.getElementById('title').innerText = greeter(user);
