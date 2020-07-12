function sayHi(){
    var greeting;
    var name = window.prompt("Hi, who is this?")
    if (name){
        greeting = 'Hello ' + name;
        document.getElementById("demo").innerHTML = greeting;
    }
}