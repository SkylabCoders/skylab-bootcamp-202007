function sayHi(){
    do{
        var user=window.prompt("username");
    }while(!user)
    document.getElementById("Hi").innerHTML = "Hi "+user;
}