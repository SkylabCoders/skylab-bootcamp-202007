// Variables generales utilizadas por las diferentes funciones.
var numeroDeJugadores=prompt('Cuantos Jugadores participaran?','Introduce solo el numero de jugadores.')

var listaJugadores=[];

var final = false;

var proxturno = true;

var letrasAcertadas = 0;

var letrasErradas = 0;

var noSabeNoContesta = 0; 

var palabrasTotales = 0;

var preguntas = [

    { letter: "a", answer: "abducir", status: 'paso', question: "CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien"},

    { letter: "b", answer: "bingo", status: 'paso' , question: "CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso"},

    { letter: "c", answer: "churumbel", status: 'paso' , question: "CON LA C. Niño, crío, bebé"},

    { letter: "d", answer: "diarrea", status: 'paso' , question: "CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida"},

    { letter: "e", answer: "ectoplasma", status: 'paso' , question: "CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación"},

    { letter: "f", answer: "facil", status: 'paso' , question: "CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad"},

    { letter: "g", answer: "galaxia", status: 'paso' , question: "CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas"},

    { letter: "h", answer: "harakiri", status: 'paso', question: "CON LA H. Suicidio ritual japonés por desentrañamiento"},

    { letter: "i", answer: "iglesia", status: 'paso' , question: "CON LA I. Templo cristiano"},

    { letter: "j", answer: "jabali", status: 'paso', question: "CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba"},

    { letter: "k", answer: "kamikaze", status: 'paso', question: "CON LA K. Persona que se juega la vida realizando una acción temeraria"},

    { letter: "l", answer: "licantropo", status: 'paso', question: "CON LA L. Hombre lobo"},

    { letter: "m", answer: "misantropo", status: 'paso', question: "CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas"},

    { letter: "n", answer: "necedad", status: 'paso', question: "CON LA N. Demostración de poca inteligencia"},

    { letter: "ñ", answer: "señal", status: 'paso', question: "CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo."},

    { letter: "o", answer: "orco", status: 'paso', question: "CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien"},

    { letter: "p", answer: "protoss", status: 'paso', question: "CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft"},

    { letter: "q", answer: "queso", status: 'paso', question: "CON LA Q. Producto obtenido por la maduración de la cuajada de la leche"},

    { letter: "r", answer: "raton", status: 'paso', question: "CON LA R. Roedor"},

    { letter: "s", answer: "stackoverflow", status: 'paso', question: "CON LA S. Comunidad salvadora de todo desarrollador informático"},

    { letter: "t", answer: "terminator", status: 'paso', question: "CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984"},

    { letter: "u", answer: "unamuno", status: 'paso', question: "CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914"},

    { letter: "v", answer: "vikingos", status: 'paso', question: "CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa"},

    { letter: "w", answer: "sandwich", status: 'paso', question: "CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso"},

    { letter: "x", answer: "botox", status: 'paso', question: "CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética"},

    { letter: "y", answer: "peyote", status: 'paso', question: "CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal  por indígenas americanos"},

    { letter: "z", answer: "zen", status: 'paso', question: "CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional"} 
];

//Funcion general del juego.
    function spin(){

        var nombreJugador = prompt('Cual es tu nombre?');
       
        reglas();

        //Con este while se comienza el juego. Se repetira siempre y cuando el jugador de OK para la sig. ronda, y hasta que se contesten
        // todas las letras.

        while(final == false){
            
            ronda(preguntas);
           
            chequeo();

        };

        crearLista();

        console.log(`Has acertado ${letrasAcertadas} palabras, has fallado en ${letrasErradas} palabras \n
            y has dejado sin contestar ${noSabeNoContesta} palabras.`)
        
      
        reset();
       
        //Esta funcion corrobora el total de letras contestas (bien o mal) y finaliza el juego si no hay mas letras que adivinar.   
        function chequeo(){
            
            contador(preguntas);

            if(palabrasTotales == 27){
                final = true;
                alert('No quedan mas letras en el abecedario. :(');
            } else {
                proxturno = confirm('Desea seguir con la siguiente ronda?');
            };

            if(proxturno == false){       
                final = true;
            };
        };

        //Esta funcion muestra las reglas del juego.
        function reglas(){
            console.log(`Bienvenido ${nombreJugador}. Las reglas son las siguientes: \n
            -Sumaras 1 punto por cada letra acertada.
            -Si contestas "pasapalabra", podras responder esa pregunta en la proxima ronda.
            -CUIDADO!! Si dejas en blanco y presionas OK, se considera como errada.
            -Puedes escribir "END" para finalizar el juego en el momento que quieras.
            Muchas suerte ${nombreJugador}. Y recuerda...no hagas trampa, porque lo sabremos ¬¬`)
        };

        //Esta funcion crea un elemento para el objeto listaJugadores, para luego ser usada para armar el ranking.
        function crearLista(){
            listaJugadores.push({nombre: nombreJugador, puntos: letrasAcertadas});
        };

    };

    //Con esta funcion se muestran las preguntas mediante prompt, y cambia su estado segun la respuesta del jugador. La preg de la letra
    // se repetira si el estado es 'paso', y se logra solamente contestando pasapalabra.
    function ronda(Array){
        for(let a = 0; a < Array.length ; a++){
            if (final == false){
                if (Array[a].status == 'paso'){
                   var respuesta = prompt(Array[a].question).toLowerCase(); 
                   
                   switch(respuesta){
                    case Array[a].answer:
                        Array[a].status = true;
                        break;
    
                    case 'pasapalabra':
                        Array[a].status = 'paso';
                        break;
                    
                    case 'end':
                        final = true;
                        break;
    
                    default:
                        Array[a].status = false;
                        break;
    
                     };
                };
            };
        };
    };

    //Esta funcion lleva la cuenta de las letras acertadas, erradas y las no contestadas en caso de que el jugador escriba END. 
    function contador(Array){
        letrasAcertadas = 0;

        letrasErradas = 0;

        noSabeNoContesta = 0; 


        for(let b = 0; b < Array.length; b++ ){
            if(Array[b].status == true){
                letrasAcertadas++
            } else if (Array[b].status == false) {
                letrasErradas++
            } else {
                noSabeNoContesta++
            };
        };
        sumaLetras();

        function sumaLetras(){
            palabrasTotales = letrasAcertadas + letrasErradas;
            return palabrasTotales;
        };
    };
    //Esta funcion muestra el ranking de los jugadores.
    function ranking(){
        var ranking = [];
        
        var rankingFinal = [];

        for(let i = 0; i<listaJugadores.length; i++){
        ranking.push(listaJugadores[i].puntos);
        };

        ranking.sort((a,b) => a-b);

        for(let a = ranking.length; 0 <= a; a--){
            for(let h = 0; h < listaJugadores.length; h++){
                if(ranking[a] === listaJugadores[h].puntos){
                    rankingFinal.push(listaJugadores[h]);
                };
            };
        };

        for(let i=0;i<rankingFinal.length;i++){
            var puesto = i + 1;
            console.log(`El puesto N*${puesto} es para ${rankingFinal[i].nombre} con ${rankingFinal[i].puntos} puntos.`)
        };

    };
    //Esta funcion pasa las variables a su estado inicial para que vuelvan a ser usadas por la funcion spin() de otro jugador.
    function reset(){
        final = false;

        palabrasTotales = letrasErradas + letrasAcertadas;

        proxturno = true;

        letrasAcertadas = 0;

        letrasErradas = 0;

        noSabeNoContesta = 0; 

        for(let i=0 ; i<preguntas.length ; i++){
            preguntas[i].status='paso';
        };
    };


    while(listaJugadores.length < numeroDeJugadores){
        spin(); 
    };

    ranking();