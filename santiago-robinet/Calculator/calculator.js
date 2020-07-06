function calcu (num1, num2) {
    //Si el tipo de variable num1 y num2 son numeros, se realizan las operaciones, insertandolas en numArr.
        if (typeof(num1) == 'number' && typeof(num2) =='number'){
            
            numArr= [];
    
            numArr.push('Suma = ' + parseFloat((num1 + num2).toFixed(3)), 'Resta = ' +parseFloat((num1 - num2).toFixed(3)), 'Division = ' + parseFloat((num1 / num2).toFixed(3)), 'Multiplicacion = ' + parseFloat((num1 * num2).toFixed(3)));
            
            console.log(numArr);
    
    //Si solo se inserta una variable solo se hara el cuadrado de esa variable, teniendo en cuenta que tambien sea de tipo numerico.
        } else if (typeof(num1) == 'number' && typeof(num2) == 'undefined' ){
    
            console.log(Math.sqrt(num1));
    
    //En el caso de que alguna de las dos variables no sea numerica, se avisa por consola.
        } else if (typeof(num1) != 'number' || typeof(num2) != 'number') {
    
            console.log('Uno o mas de los valores insertados no son Numeros! ¬.¬ ')
        };
    
    
}   
    
calcu (4 , 2);
    
calcu (9);
    
calcu( 'hola', 12);