function showDate(){
    document.getElementById('date').innerHTML = Date()
}

function showName(){
    var name = prompt("Cual es tu nombre?", "Martí");

    document.getElementById("name").innerHTML = name;
}