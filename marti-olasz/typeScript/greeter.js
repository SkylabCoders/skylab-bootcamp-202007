function greeter(user) {
    return "Hello " + user.firstName + " " + user.lastName;
}
var user = { firstName: 'Ruliando', lastName: 'klk' };
document.getElementById('title').innerText = greeter(user);
