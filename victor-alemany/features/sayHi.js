function sayHi(){
    var userName = prompt('Cómo te llamas?');

    if(userName){
        document.getElementById('userClass').innerHTML = "Hello " + userName;
    }
}