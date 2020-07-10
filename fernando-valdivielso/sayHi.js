function sayHi() {
    var name = prompt("Hello, what's your name?");
    if (name) {
        document.getElementById('demo').innerHTML='Hello ' + name
    }

}