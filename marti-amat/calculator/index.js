calculator();

function calculator(){
    var numeros=[];
    var nombreNúm=0;
    demanar_numeros();

    function demanar_numeros(){
        var resposta;
        
        do{
            nombreNúm++;
            var numer=prompt(`número ${nombreNúm}:`);
            if(comprovar_num(numer)){
                numeros.push(numer);
            }else{
                nombreNúm--;
                demanar_numeros();
                break;
            }
            resposta=prompt('Vols afegir un altre número?');
        }while(resposta==='s');
         }
    

    function comprovar_num(num){
        if(num.length===0){
            alert('Introdueixi algun valor.\n ');
            return false;
        }else{
            var valor=0;
            for(let i=0;i<num.length;i++){
                for(let j=0;j<10;j++){
                    if(num[i]===`${j}`||num[i]==='.'){
                        valor++;
                        break;
                    }
                }
            }
            if(valor<num.length){
                alert('Només els valors  numèrics estan admesos.');
                        return false;
            }
            return true;
        }
        

    }
    for(let i=0;i<nombreNúm;i++){
        if(numeros[i].includes('.')){numeros[i]=parseFloat(numeros[i]);
                }
            else{numeros[i]=parseInt(numeros[i]);
                }
        }
    var arrelV;
    if(nombreNúm==1){
        arrelV=arrel(numeros[0]);
        var arrelS=arrelV.toString();
        if(arrelS.includes('.')){
            arrelV=arrelV.toFixed(3);}
        alert('         CALCULADORA\n\n          RESULTATS\n\n  ARREL = '+arrelV);
        continuar();
    }else{

    var sumaV=suma();
    var sumaS=sumaV.toString();
    if(sumaS.includes('.')){sumaV=sumaV.toFixed(3);}
    var restaV=resta();
    var restaS=restaV.toString();
    if(restaS.includes('.')){restaV=restaV.toFixed(3);}
    var multiplicacioV=multiplicació();
    var multiplicacioS=multiplicacioV.toString();
    if(multiplicacioS.includes('.')){multiplicacioV=multiplicacioV.toFixed(3);}
    var divisioV=divisió();
    var divisioS=divisioV.toString();
    if(divisioS.includes('.')){divisioV=divisioV.toFixed(3);}
    alert('         CALCULADORA\n\n          RESULTATS\n\n  SUMA = '+sumaV+'\n  RESTA = '+restaV+'\n  MULTIPLICACIÓ = '+multiplicacioV+'\n  DIVISIÓ = '+divisioV);
    continuar();
    }

    function continuar(){
        var seguim=prompt('Vols realitzar una altre operació?(s/n)');
        switch(seguim){
            case 's':
                calculator();
                break;
            case 'n':
                alert('Bye!')
                break;
            default:
                continuar();
        }

    }

    function suma(){
        var valorS=0;
        for(let i=0;i<nombreNúm;i++){
            valorS +=numeros[i];
        }
        return valorS;
    }

    function resta(){
        var valorR=numeros[0];
        for(let i=1;i<nombreNúm;i++){
            valorR -=numeros[i];
        }
        return valorR;
    }

    function multiplicació(){
        var valorM=1;
        for(let i=0;i<nombreNúm;i++){
            valorM *=numeros[i];
        }
        return valorM;
    }

    function divisió(){
        var valorD=numeros[0];
        for(let i=1;i<nombreNúm;i++){
            valorD /=numeros[i];
        }
        return valorD;
    }

    function arrel(num){
        var numAr=Math.sqrt(num);
        return numAr;
    }
}
