Bingo();

function Bingo(){
var jugador=new Object();
jugador.nom=prompt('Nom del jugador:');
jugador.carta=new Array();
jugador.carta[0]={valor:15,encertat:false};
jugador.carta[1]={valor:35,encertat:false};
jugador.carta[2]={valor:51,encertat:false};
jugador.carta[3]={valor:76,encertat:false};
jugador.carta[4]={valor:94,encertat:false};
jugador.intent=0;
bola_valor=0;

var resultat;

alert(`la teva carta és:\n `+mostrar_carta());
jugador.intent++;
mostrar_bola(jugador.intent);



function mostrar_carta(){
 var carta=` ${jugador.carta[0].valor}    ${jugador.carta[1].valor}    `+
 `${jugador.carta[2].valor}     ${jugador.carta[3].valor}     ${jugador.carta[4].valor}`;
 return carta;
}

function recórrer_carta(valor){
    for(let i=0;i<jugador.carta.length;i++){
        if(jugador.carta[i].valor===valor){
            jugador.carta[i].encertat=true;
            jugador.carta[i].valor='X';
        }
    }
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
        };
}

function mostrar_bola(intent){
    bola_valor =Math.floor(Math.random()*100)+1;
    alert(`bola número ${intent}  = ${bola_valor}`);
    recórrer_carta(bola_valor);

}
}

