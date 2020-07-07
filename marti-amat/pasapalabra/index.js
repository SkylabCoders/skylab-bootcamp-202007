pasapalabra();


function pasapalabra(){
var questions = [
    { letter: "a", answer: "abducir", status: 0, question: "CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien"},
    { letter: "b", answer: "bingo", status: 0, question: "CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso"},
    { letter: "c", answer: "churumbel", status: 0, question: "CON LA C. Niño, crío, bebé"},
    { letter: "d", answer: "diarrea", status: 0, question: "CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida"},
    { letter: "e", answer: "ectoplasma", status: 0, question: "CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación"},
    { letter: "f", answer: "facil", status: 0, question: "CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad"},
    { letter: "g", answer: "galaxia", status: 0, question: "CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas"},
    { letter: "h", answer: "harakiri", status: 0, question: "CON LA H. Suicidio ritual japonés por desentrañamiento"},
    { letter: "i", answer: "iglesia", status: 0, question: "CON LA I. Templo cristiano"},
    { letter: "j", answer: "jabali", status: 0, question: "CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba"},
    { letter: "k", answer: "kamikaze", status: 0, question: "CON LA K. Persona que se juega la vida realizando una acción temeraria"},
    { letter: "l", answer: "licantropo", status: 0, question: "CON LA L. Hombre lobo"},
    { letter: "m", answer: "misantropo", status: 0, question: "CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas"},
    { letter: "n", answer: "necedad", status: 0, question: "CON LA N. Demostración de poca inteligencia"},
    { letter: "ñ", answer: "señal", status: 0, question: "CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo."},
    { letter: "o", answer: "orco", status: 0, question: "CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien"},
    { letter: "p", answer: "protoss", status: 0, question: "CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft"},
    { letter: "q", answer: "queso", status: 0, question: "CON LA Q. Producto obtenido por la maduración de la cuajada de la leche"},
    { letter: "r", answer: "raton", status: 0, question: "CON LA R. Roedor"},
    { letter: "s", answer: "stackoverflow", status: 0, question: "CON LA S. Comunidad salvadora de todo desarrollador informático"},
    { letter: "t", answer: "terminator", status: 0, question: "CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984"},
    { letter: "u", answer: "unamuno", status: 0, question: "CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914"},
    { letter: "v", answer: "vikingos", status: 0, question: "CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa"},
    { letter: "w", answer: "sandwich", status: 0, question: "CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso"},
    { letter: "x", answer: "botox", status: 0, question: "CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética"},
    { letter: "y", answer: "peyote", status: 2, question: "CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos"},
    { letter: "z", answer: "zen", status: 0, question: "CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional"},
];

for(let i=0;i<questions.length;i++){
    
    if(questions[i].question[3]===' '){
    questions[i].question=questions[i].question.replace('CON La','Empieza por');}
    else{
        questions[i].question=questions[i].question.replace('CONTIENE LA','Contiene la');    
    }
    
}
var questionsR= questions.map( item => { 
    return {answer:item.answer,status: item.status,question:item.question}; 
  });

var questions2 = [
    { letter: 'a', answer: 'andy', answered: 0, with: ('Empieza por '), question: ('Nombre del dueño de Woody en Toy Story (Andy)') },
    { letter: 'b', answer: 'bichos', answered: 0, with: ('Empieza por '), question: ('Película de pixar protagonizada por la hormiga Flik (Bichos)') },
    { letter: 'c', answer: 'cars', answered: 0, with: ('Empieza por '), question: ('Película de pixar protagonizada por Rayo McQueen (Cars)') },
    { letter: 'd', answer: 'dexter', answered: 0, with: ('Empieza por '), question: ('Psicópata forense especializado en análisis de salpicaduras de sangre en el Departamento de Policía de Miami. (Dexter)') },
    { letter: 'e', answer: 'embrujadas', answered: 0, with: ('Empieza por '), question: ('Serie juvenil protagonizada por tres hermanas brujas (Embrujadas)') },
    { letter: 'f', answer: 'futurama', answered: 0, with: ('Empieza por '), question: ('Serie animada creada por Matt Groening que sigue las aventuras del repartidor de pizzas Philip Fry (Futurama)') },
    { letter: 'g', answer: 'gunters', answered: 0, with: ('Empieza por '), question: ('Luchan contra los sixers en "Ready Player One" (Gunters)') },
    { letter: "h", answer: "house", answered: 0, with: ("Empieza por "), question: ("Ególatra genio de la medicina que dirige el departamento de diagnóstico médico del Hospital Universitario Princeton-Plainsboro (House)") },
    { letter: "i", answer: "iron man", answered: 0, with: ("Empieza por "), question: ("Alter ego de Tony Stark (Iron Man") },
    { letter: "j", answer: "jabalí", answered: 0, with: ("Empieza por "), question: ("Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba (Jabalí)") },
    { letter: "k", answer: "kilogramos",answered: 0, with:(""), question: ("No nos gusta ganar mas de los necesarios")},
    { letter: "l", answer: "lost", answered: 0, with: ("Empieza por "), question: ("Serie en la que aparece la Iniciativa Dharma (Lost)") },
    { letter: "m", answer: "miénteme", answered: 0, with: ("Empieza por "), question: ("Serie basada en la conexión entre los estados emocionales y las expresiones faciales (Miénteme)") },
    { letter: "n", answer: "narcos", answered: 0, with: ("Empieza por "), question: ("Plata o plomo (Narcos)") },
    { letter: "ñ", answer: "arguiñano", answered: 0, with: ("Contiene la "), question: ("Apellido del cocinero vasco que adorna todos sus platos con perejil (Arguiñano)") },
    { letter: "o", answer: "one piece", answered: 0, with: ("Empieza por "), question: ("Serie manga protagonizada por Sombrero de Paja (One piece") },
    { letter: "p", answer: "payaso", answered: 0, with: ("Empieza por "), question: ("¿Qué tipo de pez es Nemo? (Payaso)") },
    { letter: "q", answer: "queso", answered: 0, with: ("Empieza por "), question: ("Producto obtenido por la maduración de la cuajada de la leche") },
    { letter: "r", answer: "rex", answered: 0, with: ("Empieza por "), question: ("Roedor") },
    { letter: "s", answer: "stackoverflow", with: ("Empieza por "), answered: 0, question: ("Comunidad salvadora de todo desarrollador informático") },
    { letter: "t", answer: "tintin", with: ("Empieza por "), answered: 0, question: ("Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984") },
    { letter: "u", answer: "unamuno", with: ("Empieza por "), answered: 0, question: ("Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914") },
    { letter: "v", answer: "verano azul", with: ("Empieza por "), answered: 0, question: ("Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa") },
    { letter: "w", answer: "watt", answered: 0, with: ("Empieza por "), question: ("Apellido del inventor de la electricidad") },
    { letter: "x", answer: "Expediente X", answered: 0, with: ("Empieza por "), question: ("Toxina bacteriana utilizada en cirujía estética") },
    { letter: "y", answer: "peyote", answered: 0, with: ("Empieza por "), question: ("Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos") },
    { letter: "z", answer: "zen", answered: 0, with: ("Empieza por "), question: ("Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional") }
    ];

    var questions2R= questions2.map( item => { 
        return {answer:item.answer,status: item.answered,question:item.question}; 
      });
      
     
      for(let i=0;i<questions2R.length;i++){
          if(i===24||i===25){
            questions2R[i].question=`Contiene la ${questions2[i].letter.toUpperCase()}. ${questions2R[i].question}`;
          }else{
            questions2R[i].question=`Empieza por ${questions2[i].letter.toUpperCase()}. ${questions2R[i].question}`;
          }}

    for(n in questions2R){
        for(j in questions2R[n].question){
            if(questions2R[n].question[j]==='('){
                questions2R[n].question=questions2R[n].question.substr(0,j-1);

            }
        }
    } 
    
    var questions3 = [
        {letter: "a",question:"Empieza por A: Que no tiene ni dios ni patria ni amo.", answer:"anarquista",doit:false},
        {letter: "b",question:"Empieza por B: Año que dura 366 días.", answer:"bisiesto",doit:false},
        {letter: "c",question:"Empieza por C: Sistema de división del tiempo.", answer:"calendario",doit:false},
        {letter: "d",question:"Empieza por D: Tiempo que la Tierra emplea en dar una vuelta alrededor de su eje, aproximadamente veinticuatro horas.", answer:"día",doit:false},
        {letter: "e",question:"Empieza por E: País donde nunca se ponía el sol", answer:"españa",doit:false},
        {letter: "f",question:"Empieza por F: Mes al que se le añade un dia en los años bisiestos.", answer:"febrero",doit:false},
        {letter: "g",question:"Empieza por G: Papa que da nombre a nuestro calendario actual.", answer:"gregorio",doit:false},
        {letter: "h",question:"Empieza por H: El orgullo del padre.", answer:"hijo",doit:false},
        {letter: "i",question:"Empieza por I: Segundo pais del mundo más habitado.", answer:"india",doit:false},
        {letter: "j",question:"Empieza por J: Fiesta sin fin.", answer:"juerga",doit:false},
        {letter: "k",question:"Contiene la K: El jabón de lagarto le aguanta la cresta.", answer:"punky",doit:false},
        {letter: "l",question:"Empieza por A: Monstruo de las profundidades marinas.", answer:"leviatán",doit:false},
        {letter: "m",question:"Empieza por M: Soso, aburrido.", answer:"muermo",doit:false},
        {letter: "n",question:"Empieza por N: Que le gustan los muertos.", answer:"necrófilo",doit:false},
        {letter: "ñ",question:"Contiene la Ñ: Un partido ganado con trampas.", answer:"amañado",doit:false},
        {letter: "o",question:"Empieza por O: Único mamifero que pone huevos.", answer:"ornitorrinco",doit:false},
        {letter: "p",question:"Empieza por P: No falta en un plato de Arguiñano", answer:"perejil",doit:false},
        {letter: "q",question:"Empieza por Q: Arder, combustionar.", answer:"quemar",doit:false},
        {letter: "r",question:"Empieza por R: Se rompen o se cumplen.", answer:"reglas",doit:false},
        {letter: "s",question:"Contiene la S: Peor que malo.", answer:"pésimo",doit:false},
        {letter: "t",question:"Empieza por T: Para algunos existe.", answer:"teruel",doit:false},
        {letter: "u",question:"Empieza por U: Dícese del que es muy de ciudad.", answer:"urbanita",doit:false},
        {letter: "v",question:"Empieza por V: Contrario de cobarde.", answer:"valiente",doit:false},
        {letter: "w",question:"Empieza por W: La cama en el techo de las furgonetas.", answer:"westfalia",doit:false},
        {letter: "x",question:"Contiene la X: El que tiene el oficio de disecar.", answer:"taxidermista",doit:false},
        {letter: "y",question:"Empieza por Y: La marca del diapasón.", answer:"yamaha",doit:false},
        {letter: "z",question:"Empieza por Z: Duro de mollera.", answer:"zoquete",doit:false}];
        var questions3R= questions3.map( item => { 
            return {answer:item.answer,question:item.question,status: item.doit}; 
          });
          for (let i=0;i<questions3R.length;i++){
              questions3R[i].status=0;
              questions3R[i].question=questions3R[i].question.replace(':','.');
          }
          
          
          var questionsGroup=questions.map( item2 => {
              return{letter:item2.letter};
          });
          
          for(n in questionsGroup){
              questionsGroup[n].questionsA=[];
              questionsGroup[n].questionsA[0]=questionsR[n];
              questionsGroup[n].questionsA[1]=questions2R[n];
              questionsGroup[n].questionsA[2]=questions3R[n];
          }
          

          var continu='s';


          var jugador=new Object();
          jugador.nom=prompt('Nombre del jugador:');
          if(jugador.nom==null||jugador.nom===''){
            pasapalabra();  
          }
          jugador.puntuació=0;
          var rànking=[];
          var jugador1={nom:'Pere',puntuació:7};
          var jugador2={nom:'Marc',puntuació:12};
          var jugador3={nom:'Aitor',puntuació:8};
          var jugador4={nom:'Toni',puntuació:16};
          var jugador5={nom:'Maria',puntuació:20};
          var jugador6={nom:'Gemma',puntuació:22};
          var jugador7={nom:'Alba',puntuació:14};
          var jugador8={nom:jugador.nom,puntuació:jugador.puntuació};
          rànking.push(jugador1,jugador2,jugador3,jugador4,jugador5,jugador6,jugador7,jugador8);
        
          alert(`   Bienvenido Sr.${jugador.nom} a Pasapalabra SkyLabEdition!\n\n   EMPEZAMOS!!!`);
          var índex=0;
          var partida=0;
          pregunta(índex,partida,1);
          

        function pregunta(numÍndex,numPartida,tipus){
            var resposta='';
            var continuar='';
            resposta=prompt(questionsGroup[numÍndex].questionsA[numPartida].question);
            //tipus1 es refereix a la primera ronda, tipus2 a les rondes següents en les que es tornen a formular les preguntes amb status=2
            if(tipus===1){
                índex++;
            }else{
                for(let i=numÍndex+1;i<26;i++){
                    if(questionsGroup[i].questionsA[numPartida].status===2){
                        índex=i;
                        break;
                    }
                    }
                if(índex===numÍndex){// es refereix al cas en que sigui la última pregunta passada
                        índex=26;
                        
                    }
                }

        
            if(resposta.toLowerCase()===questionsGroup[numÍndex].questionsA[numPartida].answer){
                jugador.puntuació ++;
                questionsGroup[numÍndex].questionsA[numPartida].status=1;
                if(índex===26){
                    ronda_siguiente(1);
                }else{
                alert('RESPUESTA CORRECTA!! \n\nHas ganado un punto!!');
                continuarF();
                if(continu==='s'){
                    pregunta(índex,numPartida,tipus);
                }else{finish();}
                }
            }else if(resposta.toLowerCase()==='pasapalabra'){
                questionsGroup[numÍndex].questionsA[numPartida].status=2;
                if(índex===26){
                    ronda_siguiente(2);
                    }else{
                alert('Ok, pasamos palabra,entonces...');
                continuarF();
                if(continu==='s'){
                    pregunta(índex,numPartida,tipus);}
                else{
                    finish();
                }}
            }else{
                questionsGroup[numÍndex].questionsA[numPartida].status=3;
                if(índex===26){
                    ronda_siguiente(3);
                    }else{
                alert('RESPUESTA INCORRECTA!!');
                continuarF();
                if(continu==='s'){
                    pregunta(índex,numPartida,tipus);}
                    else{finish();}
                }

            }
        
    }
    function finish(){
        alert(`Has logrado ${jugador.puntuació} puntos.\n\nHASTA LA PRÓXIMA!!!`)
    }

    function ronda_siguiente(numRes){
        var respuesta='';
        var final='';
        switch(numRes){
            case 1:
                respuesta='RESPUESTA CORRECTA!! \n\nHas ganado un punto!!\n\nHas finalizado tu ';
                break;
            case 2:
                respuesta='Ok, pasapalabra\n\nHas finalizado tu  ';
                break;
            case 3:
                respuesta='RESPUESTA INCORRECTA...\n\nHas finalizado tu ';
                break;
            }
        var pases=0;
        for (n in questions){
            if(questionsGroup[n].questionsA[partida].status===2){
                pases++;
            }
        }
        if(pases===0){
            final=`partida!!\n\n Has logrado ${jugador.puntuació} puntos.\n ${mostrar_rànking()} `;
            partida ++;

        }else{
                final='turno';
            }
            alert(`${respuesta}${final}`);
            continuarF();
            if(continu==='s'){
                if(pases===0){
                    índex=0;
                    tipus=1;
                    
                    jugador.puntuació=0;
                    pregunta(índex,partida,tipus);

                }else{
                preguntesNoRespostes(partida);}
            }else{finish();}
            
            
                
            
        
    }
    function preguntesNoRespostes(numPartida){
       
        var preguntesPassadesAL=[];
        
        
        
        for(let ind=0;ind<questionsGroup.length;ind++){
            if(questionsGroup[ind].questionsA[numPartida].status===2){
                preguntesPassadesAL.push(ind);
                }
        }
        console.log(preguntesPassadesAL);
        
        pregunta(preguntesPassadesAL[0],numPartida,2);
        
    }
    function continuarF(){
        var contin=prompt('continuamos?(s/n)');
        
        switch(contin){
            case 's':
                break;
            case 'n':
                continu='n';
                
                break;
            default:
                continuarF();
                
        } 
    }
    function mostrar_rànking(){
        
        rànking.sort(function(a,b){
            return(b.puntuació-a.puntuació);
        });
        var missatge='RÁNKING\n\n';
        for(let i=0;i<rànking.length;i++){
            
            missatge += `    ${rànking[i].nom} -> ${rànking[i].puntuació} puntos\n`;
        }
        return missatge;
        
        
    }

       
                         
} 
