function calc(a ,b = " "){
    //Detectar si solo se ha introducido un parámetro
    if(b === " "){
        return [parseFloat((a**0.5).toFixed(3))];
    //Detectar si los dos inputs son números
    } else if(typeof(a) == "number" && typeof(b) == "number"){
        return [a+b,a-b,a*b,parseFloat((a/b).toFixed(3))];
    //Si algún de los dos no lo es se avisa al usuario
    } else{
        return "¡No has introducido correctamente los números!";
    }
}

calc(3,7);
calc(14);
calc("a",true);