function sayHi(){
    var greeting;
    var name = prompt("¿What is your name?");
    if (name){
        greeting = "Hello! " + name;
        document.getElementById("demo").innerHTML = greeting;
    }
}