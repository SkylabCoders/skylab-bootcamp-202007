var Student = (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
})();
function greeter(person) {
    return "Hola " + person.firstName + " " + person.lastName;
}
function greeterStudent(student) {
    return "Hola " + student.fullName;
}
var user = { firstName: "Cara", lastName: 'Cola' };
var student = new Student('Anna', 'V', 'Codina');
document.getElementById('title').innerText = greeter(student);
document.getElementById('title-student').innerText = greeterStudent(student);
