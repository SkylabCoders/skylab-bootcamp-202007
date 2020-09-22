var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(name) {
    return "Hello SkylabCooderr " + person.firstName + " " + person.lastName;
}
var skylaber = new Student('santi', 'a', 'rob');
document.getElementById('title').innerHTML = greeter(skylaber);
