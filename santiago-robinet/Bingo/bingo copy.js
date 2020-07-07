var carton = [

    { numero:27 , matched: false },
    { numero:33 , matched: false },
    { numero: 7 , matched: false },
    { numero:19 , matched: false },
    { numero:45 , matched: false },
];

function bingo(){

    var numero = numeroAleatorio();
    console.log(numero);
    turno();
    proxTurno();
     
    function numeroAleatorio(){
         numero = Math.ceil(Math.random()*50);
         return numero;
    };

       
    function turno(){
           for(let i = 0; i < carton.length ; i++){
               if (numero === carton[i].numero){
                   carton[i].numero = 'X';
                   carton[i].matched = true;
               };
           };
    };
       
    
    function proxTurno(){
           let pregunta = confirm('Que le parece? Quiere sacar otro numero?');
           if(pregunta === true){
               bingo();
            } else {console.log('Adios PIMPOLLO!')};
    };
};
bingo();
