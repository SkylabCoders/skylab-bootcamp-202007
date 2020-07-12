
function  sayName (str = "Escribe tu nombre aqui"){
    var name;
    name = prompt(str);
    if (name)
        document.getElementById("demo").innerHTML = name;
    
}