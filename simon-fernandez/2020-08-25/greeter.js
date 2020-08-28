var Hero = /** @class */ (function () {
    function Hero(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Hero;
}());
function greeter(name) {
    return "Fuck you Celeritas Best regards " + name.firstName + " " + name.lastName;
}
var user = { firstName: 'Narco', lastName: 'El capo' };
document.getElementById('title').innerText = greeter(user);
