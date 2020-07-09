function calculatorPro(){
    var save, buffer= [];
    var num, ask;
    var i = 0;
    var j = 0;
    //num1=prompt("Insert the first number");
    //save.push(num1);
    args();
    quest();
    function args(){
        num=prompt("Insert the number");
        buffer[j]=num;
        j++;
        var again = prompt("more numbers? y/n");
        switch (again){
            case "y":
                args();
            case "n":
                save.push(sum(buffer));
                save.push(sub(buffer));
                save.push(mult(buffer));
                save.push(div(buffer));
        }
    }
    function sum(){
        var acc = 0;
        for (num in arguments) {
            console.log(num);
            acc += arguments[num];
        }
        return acc;
    }
    function sub(){
        var acc = 0;
        for (num in arguments) {
            console.log(num);
            acc -= arguments[num];
        }    
        return acc;
    }
    function mult(){
        var acc = 0;    
        for (num in arguments) {
            console.log(num);   
            acc *= arguments[num];
        }    
        return acc;
    }
    function div(){
        var acc = 0;    
        for (num in arguments) {
            console.log(num);  
            acc /= arguments[num];
        }   
        return acc;
    }
    function quest(){
        ask=prompt("Do you want to do more operations? y/n"); 
        switch(ask){
            case "y":
                calculatorPro();
            case "n":
                // !!!!!!!!Puede que la i se machaque igual es necesario añadir un contador o declararla fuera
                for(i; i < save.length; i++) {
                    console.log(save[i]);
                }
                i
                return false;
            default:
                quest();
        } 
    }
}
calculatorPro()