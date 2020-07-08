function showDate(){
    document.getElementById('date').innerHTML = Date()
}

function showName(){
    var name = prompt("Cual es tu nombre?", "Martí");

    if(name){
        document.getElementById("name").innerHTML = "Hello " + name;
    }
}