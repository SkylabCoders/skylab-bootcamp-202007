var questions = [];

var ronda01 = [
    { letter: "a", answer: "abducir", status: 0, question: "CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien."},
    { letter: "b", answer: "bingo", status: 0, question: "CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso."},
    { letter: "c", answer: "churumbel", status: 0, question: "CON LA C. Niño, crío, bebé."},
    { letter: "d", answer: "diarrea", status: 0, question: "CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida."},
    { letter: "e", answer: "ectoplasma", status: 0, question: "CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación."},
    { letter: "f", answer: "facil", status: 0, question: "CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad."},
    { letter: "g", answer: "galaxia", status: 0, question: "CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas."},
    { letter: "h", answer: "harakiri", status: 0, question: "CON LA H. Suicidio ritual japonés por desentrañamiento."},
    { letter: "i", answer: "iglesia", status: 0, question: "CON LA I. Templo cristiano."},
    { letter: "j", answer: "jabali", status: 0, question: "CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba."},
    { letter: "k", answer: "kamikaze", status: 0, question: "CON LA K. Persona que se juega la vida realizando una acción temeraria."},
    { letter: "l", answer: "licantropo", status: 0, question: "CON LA L. Hombre lobo."},
    { letter: "m", answer: "misantropo", status: 0, question: "CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas."},
    { letter: "n", answer: "necedad", status: 0, question: "CON LA N. Demostración de poca inteligencia."},
    { letter: "ñ", answer: "señal", status: 0, question: "CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo."},
    { letter: "o", answer: "orco", status: 0, question: "CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien."},
    { letter: "p", answer: "protoss", status: 0, question: "CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft."},
    { letter: "q", answer: "queso", status: 0, question: "CON LA Q. Producto obtenido por la maduración de la cuajada de la leche."},
    { letter: "r", answer: "raton", status: 0, question: "CON LA R. Roedor."},
    { letter: "s", answer: "stackoverflow", status: 0, question: "CON LA S. Comunidad salvadora de todo desarrollador informático."},
    { letter: "t", answer: "terminator", status: 0, question: "CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984."},
    { letter: "u", answer: "unamuno", status: 0, question: "CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914."},
    { letter: "v", answer: "vikingos", status: 0, question: "CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa."},
    { letter: "w", answer: "sandwich", status: 0, question: "CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso."},
    { letter: "x", answer: "botox", status: 0, question: "CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética."},
    { letter: "y", answer: "peyote", status: 0, question: "CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal  por indígenas americanos."},
    { letter: "z", answer: "zen", status: 0, question: "CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional."} 
];

var ronda02 = [
    { letter: "a", answer: "aceite", status: 0, question: "CON LA A. Líquido graso de color verde amarillento que se obtiene prensando las aceitunas."},
    { letter: "b", answer: "buzon", status: 0, question: "CON LA B. Abertura por donde se echan las cartas para el correo."},
    { letter: "c", answer: "chandal", status: 0, question: "CON LA C. Ropa deportiva que consta de un pantalón y jersey amplio."},
    { letter: "d", answer: "devoto", status: 0, question: "CON LA D. Dedicación con fervor a obras de piedad y religión."},
    { letter: "e", answer: "entera", status: 0, question: "CON LA E. Se dice de la leche que conserva toda la grasa y sustancias nutritivas."},
    { letter: "f", answer: "forestal", status: 0, question: "CON LA F. Perteneciente o relativo a los bosques y a los aprovechamientos de leñas o pastos."},
    { letter: "g", answer: "gori gori", status: 0, question: "CON LA G. Generalmente canto fúnebre con que se acompañan los entierros."},
    { letter: "h", answer: "hombrera", status: 0, question: "CON LA H. Adorno especial de los vestidos en la parte correspondiente a los hombros."},
    { letter: "i", answer: "intuir", status: 0, question: "CON LA I. Percibir íntima o instantáneamente una idea o verdad tal como si la tuviera a la vista."},
    { letter: "j", answer: "jornada", status: 0, question: "CON LA J. Tiempo de duración del trabajo diario."},
    { letter: "k", answer: "kiwi", status: 0, question: "CON LA K. Fruta comestible de piel marrón y áspera, con el interior verde y con semillas negras diminutas."},
    { letter: "l", answer: "lermontov", status: 0, question: "CON LA L. Apellido del poeta ruso autor de la obra \"La muerte del poeta\" de 1837."},
    { letter: "m", answer: "menor", status: 0, question: "CON LA M. Se dice de una persona que aún no ha cumplido la mayoría de edad."},
    { letter: "n", answer: "ninfa", status: 0, question: "CON LA N. Cada una de las fabulosas deidades de las aguas, bosques o selvas."},
    { letter: "ñ", answer: "engañar", status: 0, question: "CONTIENE LA Ñ. Decir mentiras. Intentar que alguien crea que lo se le dice es verdad."},
    { letter: "o", answer: "ordenanza", status: 0, question: "CON LA O. Empleado que en ciertas oficinas desempeña labores subalternas."},
    { letter: "p", answer: "prioridad", status: 0, question: "CON LA P. Anterioridad de algo respecto de otra cosa en tiempo o en orden."},
    { letter: "q", answer: "branquia", status: 0, question: "CONTIENE LA Q. Órgano respiratorio de los peces formado por laminas o filamentos."},
    { letter: "r", answer: "renard", status: 0, question: "CON LA R. Apellido del ingeniero francés que junto a Arthur C. Krebs, construyó el dirigible militar \"La France\" en 1884."},
    { letter: "s", answer: "samba", status: 0, question: "CON LA S. Danza popular brasileña de influencia africana cantada de compás binario."},
    { letter: "t", answer: "tragaperras", status: 0, question: "CON LA T. Máquina de juegos de azar que funciona introduciendo monedas."},
    { letter: "u", answer: "urgencia", status: 0, question: "CON LA U. Necesidad o falta apremiante, inmediata obligación de hacer algo."},
    { letter: "v", answer: "vivienda", status: 0, question: "CON LA V. Lugar cerrado y cubierto construido para ser habitado por personas."},
    { letter: "w", answer: "windsurf", status: 0, question: "CON LA W. Deporte que consiste en deslizarse por el agua sobre una tabla especial provista de una vela."},
    { letter: "x", answer: "oxford", status: 0, question: "CONTIENE LA X. Ciudad inglesa cuya Universidad compite cada año en una popular regata contra la Universidad de Cambridge."},
    { letter: "y", answer: "leguleyo", status: 0, question: "CONTIENE LA Y. Persona que aplica el derecho sin rigor y desenfadadamente."},
    { letter: "z", answer: "zarandeo", status: 0, question: "CON LA Z. Movimiento repetido y violento de un lado a otro."} 
];

var ronda03 = [
    { letter: "a", answer: "abierto", status: 0, question: "CON LA A. No murado, no cercado o no cerrado."},
    { letter: "b", answer: "broca", status: 0, question: "CON LA B. Herramienta formada por una barra metálica con la punta en espiral, para hacer agujeros en material duro."},
    { letter: "c", answer: "chollo", status: 0, question: "CON LA C. Cosa apreciable que se adquiere a poca costa."},
    { letter: "d", answer: "dentadura", status: 0, question: "CON LA D. Conjunto de dientes, muelas y colmillos que tiene en la boca una persona o un animal."},
    { letter: "e", answer: "estrenar", status: 0, question: "CON LA E. Hacer uso por primera vez de algo."},
    { letter: "f", answer: "fisioterapia", status: 0, question: "CON LA F. Tratamiento de las enfermedades o lesiones por medio de elementos mecánicos, como el masaje o la gimnasia."},
    { letter: "g", answer: "golfo", status: 0, question: "CON LA G. Gran porción de mar que se interna en la tierra entre dos cabos."},
    { letter: "h", answer: "hidratar", status: 0, question: "CON LA H. Restablecer el grado de humedad normal de la piel u otros tejidos."},
    { letter: "i", answer: "irlanda", status: 0, question: "CON LA I. País europeo con capital en Dublín."},
    { letter: "j", answer: "jamiroquai", status: 0, question: "CON LA J. Grupo musical de funk que en 1996 publicó el álbum Travelling without Moving."},
    { letter: "k", answer: "kefir", status: 0, question: "CON LA K. Leche fermentada artificialmente y que contiene ácido láctico, alcohol y ácido carbónico."},
    { letter: "l", answer: "levante", status: 0, question: "CON LA L. Viento procedente del este."},
    { letter: "m", answer: "manifestacion", status: 0, question: "CON LA M. Reunión pública, generalmente al aire libre, en la que los asistentes reclaman algo o expresan su protesta por algo."},
    { letter: "n", answer: "noruego", status: 0, question: "CON LA N. Natural del país europeo con capital en Oslo."},
    { letter: "ñ", answer: "leña", status: 0, question: "CONTIENE LA Ñ. Parte de los árboles y matas que, cortada y hecha trozos, se emplea como combustible."},
    { letter: "o", answer: "obsoleto", status: 0, question: "CON LA O. Anticuado, inadecuado a las circunstancias actuales."},
    { letter: "p", answer: "pequeño", status: 0, question: "CON LA P. Se dice de un niño de muy corta edad."},
    { letter: "q", answer: "bosque", status: 0, question: "CONTIENE LA Q. Sitio poblado de árboles y matas."},
    { letter: "r", answer: "ring", status: 0, question: "CON LA R. Espacio cercado en que combaten los boxeadores."},
    { letter: "s", answer: "silencio", status: 0, question: "CON LA S. Falta de ruido."},
    { letter: "t", answer: "talco", status: 0, question: "CON LA T. Silicato de magnesia que, en forma de polvo, se utiliza para la higiene y en la industria cosmética."},
    { letter: "u", answer: "usurpar", status: 0, question: "CON LA U. Apoderarse de una propiedad o de un derecho que legítimamente pertenece a otro, por lo general con violencia."},
    { letter: "v", answer: "vispera", status: 0, question: "CON LA V. Día que antecede inmediatamente a otro determinado, especialmente si es fiesta."},
    { letter: "w", answer: "whisky", status: 0, question: "CON LA W. Licor alcóholico que se obtiene del destilado del grano de algunas plantas."},
    { letter: "x", answer: "flexibilizar", status: 0, question: "CONTIENE LA X. Hacer flexible algo, darle flexibilidad."},
    { letter: "y", answer: "cayuco", status: 0, question: "CONTIENE LA Y. Embarcación india de una pieza, más pequeña que la canoa, con el fondo plano, que se gobierna con el canalete"},
    { letter: "z", answer: "zanjaste", status: 0, question: "CON LA Z. Segunda persona de singular del pretérito perfecto simple de indicativo del verbo zanjar."} 
];

var partidas = 0;
var exit = false; 
var puntos = 0; 
var fallos = 0; 
var players = [];


function pasapalabra() {

    if (partidas == 0) {
        questions = ronda01;
    } else if ( partidas == 1) {
        questions = ronda02;
    } else if (partidas == 2) {
        questions = ronda03;
    }


    function player() {
        var usuario = prompt('¿Cuál es tu nombre?');
        if(usuario == '') {
            player();
        } else if (usuario == null) {
            console.log('¡Hasta otra!');
        } else {
            console.log(`¡Hola ${usuario}! ¡Bienvenido/a a PASAPALABRA GAME!`);
            name = usuario;
            ronda();
        }
    }

     
    function ronda() {
        while(!exit) {
            for (var i = 0; i < questions.length; i++) {
                if (questions[i].status == 0) {
                    console.log(questions[i].question);
                    var respuesta = prompt(questions[i].question);
                    while (respuesta == '') respuesta = prompt(questions[i].question);
                    var a = respuesta ? respuesta.toLowerCase() : null;
                
                        if (a == questions[i].answer) {
                            questions[i].status = 1;
                            console.log('¡Correcto! 1 punto');
                            puntos++;
                        } else if (a == 'pasapalabra') {
                            questions[i].status = 0;
                            console.log('pasapalabra');
                        } else if (a == null) {
                            exit = true;
                            break;
                        } else if (a == 'end') {
                            exit = true;
                            break;
                        } else {
                            questions[i].status = 'x';
                            console.log(`Lo sentimos, la respuesta correcta es: ${questions[i].answer}.`);
                            fallos++;
                        }
                }
            }

            var allQuestions = questions.filter(quest => quest.status == 0);
            if (allQuestions.length == 0) {
           
                exit = true;
                console.log(`· Tienes ${puntos} palabra/s acertada/s y ${fallos} palabra/s fallada/s`);
                players.push({ name: name, puntos: puntos });
                ranking();
            }
        }
        if (a == null || a == 'end') {
            console.log(`· ¡Oh, lástima! Dejas la partida con ${puntos} palabra/s acertada/s y ${fallos} palabra/s fallada/s.`);
        }
    }

    player();    
}


function ranking() {
    var ordenar = function (a, b) {
        return a.puntos < b.puntos;
    }
    players.sort(ordenar);

    console.log('RANKING TOP 3 PASAPALABRA GAME:');
    for (player of players) {
        console.log(`>> Con ${player.puntos} palabras acertadas: ${player.name}`);
    }

    if(partidas == 2) console.log('¡Graicas por participar en PASAPALABRA GAME!');
    else volverAjugar();    
}


function volverAjugar() {
    var jugar = prompt('¿Otra partida?', 'Si/No');
    var volver = jugar ? jugar.toLowerCase() : null;
    if (volver == 'si') {
        partidas++;
        exit = false;
        puntos = 0; 
        fallos = 0; 
        pasapalabra();
    } else if (volver == 'no') {
        console.log('¡Gracias por jugar!');
    } else if (volver == null) {
        console.log('¡Gracias por jugar!');
    } else {
        volverAjugar();
    }
}

pasapalabra();