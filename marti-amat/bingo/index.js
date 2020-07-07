Bingo();

function Bingo(){
var jugador=new Object();
var número=new Object();
número.valor=0;
número.encertat=true;
jugador.nom=prompt('Nom del jugador:');
jugador.carta=[];
jugador.puntuació=0;
var línea=false;
var rànking=[];
var jugador1={nom:'Pere',puntuació:570};
var jugador2={nom:'Marc',puntuació:200};
var jugador3={nom:'Aitor',puntuació:-370};
var jugador4={nom:'Toni',puntuació:-150};
var jugador5={nom:'Maria',puntuació:880};
var jugador6={nom:'Gemma',puntuació:120};
var jugador7={nom:'Alba',puntuació:-520};
var jugador8={nom:jugador.nom,puntuació:jugador.puntuació};
rànking.push(jugador1,jugador2,jugador3,jugador4,jugador5,jugador6,jugador7,jugador8);



jugador.intent=0;
bola_valor=0;
var bolesSortides=[];
bolesSortides[0]=0;
alert(`          Benvingut Sr.${jugador.nom} al Bingo SkyLab\n\n`+
       `Si aconsegueixes fer Bingo en:\n`+
       `     menys de 50 boles obtindràs 1000 punts,\n`+
      `     entre 50 i 65 boles obtindràs 600 punts,\n`+
      `     entre 65 i 75 boles obtindràs 300 punts,\n`+
      `     entre 75 i 80 boles no rebràs punts,\n`+
      `     entre 80 i 90 boles perdràs 300 punts,\n`+
      `     entre 90 i 95 boles perdràs 600 punts i \n`+
      `     més de 95 boles perdràs 1000 punts` );
alert(mostrar_rànking());
generar_carta();



function mostrar_rànking(){
    rànking.sort(function(a,b){
        return(b.puntuació-a.puntuació);
    });
    var missatge='RÀNKING\n\n';
    for(let i=0;i<rànking.length;i++){
        
        missatge += `    ${rànking[i].nom} -> ${rànking[i].puntuació} punts\n`;
    }
    return missatge;

}

function generar_carta(){
    jugador.carta[0]={valor:(Math.floor(Math.random()*100)+1),encertat:false};
    for(let i=1;i<15;i++){
        comprovar_número(i);
        }
     
    function comprovar_número(pos){
        jugador.carta[pos]={valor:(Math.floor(Math.random()*100)+1),encertat:false};
        for(let j=0;j<pos;j++){
            if(jugador.carta[pos].valor===jugador.carta[j].valor){
                comprovar_número(pos);
            }
        }
    }
    var novaCarta=prompt(`la teva carta és:\n\n`+mostrar_carta()+'\net donc una altre carta?(s/n)');
    respostaNovaCarta(novaCarta);
    function respostaNovaCarta(resp){
    switch(resp){
        
        case('s'):
            generar_carta();
            break;
        
        case('n'):
            jugador.intent++;
            mostrar_bola(jugador.intent);
            break;
                    
        default:
            respostaNovaCarta(prompt(`la teva carta és:\n `+mostrar_carta()+'et donc una altre carta?(s/n)')); 
        };}

}


function mostrar_carta(){
    var espais=[];
    for(let i=0;i<15;i++){
        if(jugador.carta[i].valor<10){
            espais[i]=' ';
        }else{
            espais[i]='';
        }
    }
 var carta=` ${jugador.carta[0].valor}${espais[0]}    ${jugador.carta[1].valor}${espais[1]}    `+
 `${jugador.carta[2].valor}${espais[2]}     ${jugador.carta[3].valor}${espais[3]}     ${jugador.carta[4].valor}${espais[4]}\n`+
 ` ${jugador.carta[5].valor}${espais[5]}    ${jugador.carta[6].valor}${espais[6]}    `+
 `${jugador.carta[7].valor}${espais[7]}     ${jugador.carta[8].valor}${espais[8]}     ${jugador.carta[9].valor}${espais[9]}\n`+
 ` ${jugador.carta[10].valor}${espais[10]}    ${jugador.carta[11].valor}${espais[11]}    `+
 `${jugador.carta[12].valor}${espais[12]}     ${jugador.carta[13].valor}${espais[13]}     ${jugador.carta[14].valor}${espais[14]}\n`;
 return carta;
}

function recórrer_carta(valor){
    for(let i=0;i<jugador.carta.length;i++){
        if(jugador.carta[i].valor===valor){
            jugador.carta[i].encertat=true;
            jugador.carta[i].valor='X';
        }
    }
    comprovar_encerts();
    function mostrar_carta_resultat(){ 
    var resposta=prompt(mostrar_carta()+'\n\n VOLS CONTINUAR?(s/n)');
    switch(resposta){
        
        case('s'):
            jugador.intent++;
            mostrar_bola(jugador.intent);
            break;
        
        case('n'):
            alert('GRÀCIES PER JUGAR AL BINGO AMB NOSALTRES!');
            break;
                    
        default:
            recórrer_carta(bola_valor); 
        };}
    
    function comprovar_encerts(){
        var encertsL1=0;
        var encertsL2=0;
        var encertsL3=0;
        var encertsB=0;
        
        for(let i=0;i<15;i++){
            if(jugador.carta[i].encertat==true){
                encertsB++;
                switch(true){
                    case (i<5):
                        encertsL1++;
                        break;
                    case (i<10):
                        encertsL2++;
                        break;
                    default:
                        encertsL3++;
                }
            }
        }
        if(encertsL1===5||encertsL2===5||encertsL3===5){
            if(línea==false){
            alert('LÍNEA!!!');
            línea=true;}
        }
        
        if(encertsB===15){
            alert('BINGO!!!');
            mostrar_resultats();
            }else{
                mostrar_carta_resultat();
            }
    }
}

function mostrar_bola(intent){
    
    comprovar_bola_repetida();
    
    function comprovar_bola_repetida(){
        bola_valor =Math.floor(Math.random()*100)+1;
        for(let i=0;i<bolesSortides.length;i++){
            if(bola_valor===bolesSortides[i]){
                comprovar_bola_repetida();
               }
        }
        return bola_valor;
        }
    bolesSortides.push(bola_valor);
    alert(`bola número ${intent}  = ${bola_valor}`);
    recórrer_carta(bola_valor);

}



function mostrar_resultats(){
    var textRes=0;
    var punts=0;
    switch(true){
        case (jugador.intent<50):
            jugador.puntuació +=1000;
            textRes=1;
            punts=1000;
            break;
        case (jugador.intent<65):
            jugador.puntuació +=600;
            textRes=1;
            punts=600;        
            break;
        case (jugador.intent<75):
            jugador.puntuació +=300;
            textRes=1;
            punts=300;
            break;
        case (jugador.intent<80):
            textRes=2;
            break;
        case (jugador.intent<90):
            jugador.puntuació -=300;
            textRes=3;
            punts=300;
            break;
        case (jugador.intent<95):
            jugador.puntuació -=600;
            textRes=3;
            punts=600;
            break;
        default:
            jugador.puntuació -=1000;
            textRes=3;
            punts=1000;
    }
    for(let i=0;i<8;i++){
        if(rànking[i].nom===jugador.nom){
            rànking[i].puntuació=jugador.puntuació;
        }
    }

    var missatgePun;
    switch(textRes){
        case 1:
            missatgePun=`HAS GUANYAT ${punts} PUNTS!!!`;
            break;
        case 2:
            missatgePun=`NO HAS GUANYAT CAP PUNT`;
            break;
        case 3:
            missatgePun=`HAS PERDUT ${punts} PUNTS....`;
            break;
    }
    jugarMés();
    function jugarMés(){
        var jugarM=prompt(`      HAS FET BINGO AMB ${jugador.intent} BOLES\n`+
        `       ${missatgePun} \n\n`+mostrar_rànking()+
        `\n\n vols jugar una altre partida?(s/n) `);
        switch(jugarM){
            case 's':
                bolesSortides=[];
                bolesSortides[0]=0;
                jugador.intent=0;
                línea=false;
                generar_carta();
                break;
            case 'n':
                alert('GRÀCIES PER JUGAR AL BINGO AMB NOSALTRES!');
                break;
            default:
                jugarMés();

        }
    }
}


}


