function greeter(person) {
    return "Hello " + person.firstName;
}
var user = { firstName: 'Esther', lastName: 'Morillo', age: 30 };
document.getElementById('title').innerHTML = greeter(user);
