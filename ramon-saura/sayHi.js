function sayHi() {
    var greeting;
    var name = prompt('What`s your name?').toLocaleLowerCase();
    if(name){
    greeting = "Hello " + name + "!";
    document.getElementById("demo").innerHTML=greeting;
    }
}