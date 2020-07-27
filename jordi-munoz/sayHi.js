

function sayHi() {
    var greeting;
    var name = window.prompt("Write your name");
    if (name) {
        greeting = 'Hello ' + name;
        document.getElementById('demo').innerHTML = greeting;
    }
}
sayHi();