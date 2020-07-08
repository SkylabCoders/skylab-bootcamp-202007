function sayHi () {
    var greeting;
    var name = window.prompt('Cuál es tu nombre');
    if(name) {
        greeting = 'Hello ' + name;
        document.getElementById("demo2").innerHTML = greeting;
    }
}
