function sayHi(){
    var greeting;
    var name = window.prompt("What's your name?");
    if(name){
        greeting = confirm(`Hello ${name}`);
        document.getElementById("demo").innerHTML = greeting;
    }
}