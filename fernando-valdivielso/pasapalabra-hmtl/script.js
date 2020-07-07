var questions = [
    { letter: "a", answer: "activar", status: 0, question: "CON LA A. Hacer que se ponga en funcionamiento un mecanismo" },
    { letter: "b", answer: "bahía", status: 0, question: "CON LA B. Entrada natural de mar en la costa, de extensión considerable pero generalmente menor que la de un golfo." },
    { letter: "c", answer: "cangrejo", status: 0, question: "CON LA C. Cada uno de los artrópodos crustáceos del orden de los decápodos" },
    { letter: "d", answer: "decaedro", status: 0, question: "CON LA D. Sólido que tiene diez caras." },
    { letter: "e", answer: "estable", status: 0, question: "CON LA E. Que se mantiene sin peligro de cambiar, caer o desaparecer." },
    { letter: "f", answer: "fachada", status: 0, question: "CON LA F. Paramento exterior de un edificio, especialmente el principal." },
    { letter: "g", answer: "gamba", status: 0, question: "CON LA G. Crustáceo semejante al langostino, pero algo menor" },
    { letter: "h", answer: "haiku", status: 0, question: "CON LA H. Composición poética de origen japonés que consta de tres versos de cinco, siete y cinco sílabas respectivamente" },
    { letter: "i", answer: "impoluto", status: 0, question: "CON LA I. Limpio, sin mancha." },
    { letter: "j", answer: "jarra", status: 0, question: "CON LA J. Vasija de barro, porcelana, loza, cristal, etc., con cuello y boca anchos y una o dos asas." },
    { letter: "k", answer: "kiwi", status: 0, question: "CON LA K. Ave apterigiforme, del tamaño de una gallina, que habita en Nueva Zelanda." },
    { letter: "l", answer: "lactosa", status: 0, question: "CON LA L. Azúcar que contiene la leche, formado por glucosa y galactosa." },
    { letter: "m", answer: "musa", status: 0, question: "CON LA M. Inspiración del artista o escritor." },
    { letter: "n", answer: "nodo", status: 0, question: "CON LA N. En un esquema o representación gráfica en forma de árbol, cada uno de los puntos de origen de las distintas ramificaciones." },
    { letter: "ñ", answer: "mañana", status: 0, question: "CONTIENE LA Ñ. Parte del día que transcurre desde el amanecer hasta el mediodía.." },
    { letter: "o", answer: "oasis", status: 0, question: "CON LA O. Sitio con vegetación y a veces con manantiales, que se encuentra aislado en los desiertos arenosos de África y Asia." },
    { letter: "p", answer: "paleontología", status: 0, question: "CON LA P.  Ciencia que estudia los organismos que han existido en el pasado de la Tierra a partir de sus restos fósiles." },
    { letter: "q", answer: "quisquilloso", status: 0, question: "CON LA Q.  Demasiado delicado en el trato común." },
    { letter: "r", answer: "rosquilla", status: 0, question: "CON LA R.  Dulce en forma de rosca pequeña, hecho de masa de harina con huevos, azúcar y algún otro ingrediente." },
    { letter: "s", answer: "saquear", status: 0, question: "CON LA S.  Dicho de los soldados: Apoderarse violentamente de lo que hallan en un lugar." },
    { letter: "t", answer: "tararear", status: 0, question: "CON LA T. Cantar entre dientes y sin articular palabras." },
    { letter: "u", answer: "usb", status: 0, question: "CON LA U. Toma de conexión universal de uso frecuente en las computadoras y otros dispositivos electrónicos." },
    { letter: "v", answer: "ventral", status: 0, question: "CON LA V. Perteneciente o relativo al vientre." },
    { letter: "w", answer: "whisky", status: 0, question: "CON LA W. Licor alcohólico que se obtiene del grano de algunas plantas, destilando un compuesto amiláceo en estado de fermentación" },
    { letter: "x", answer: "xenon", status: 0, question: "CONLA X.  Elemento químico de núm. atóm. 54, perteneciente al grupo de los gases nobles, presente en el aire en muy pequeña cantidad, denso, incoloro y no del todo inerte, usado en lámparas y tubos electrónicos." },
    { letter: "y", answer: "yeso", status: 0, question: "CON LA Y. Sulfato de calcio hidratado, de color blanco, usado en construcción y en escultura" },
    { letter: "z", answer: "azabache", status: 0, question: "CONTIENE LA Z. Variedad de lignito, dura, compacta, de color negro y susceptible de pulimento, que se emplea como adorno en collares, pendientes, etc." }
]


var game = document.getElementById('question');

var start = document.getElementById('start');

var input = document.getElementById('respuesta');
// var answerLowerCase = input.toLowerCase();

var correct = document.getElementById('correct');

start.addEventListener('click', function () {
    for (var i = 0; i < questions.length; i++) {
        game.innerHTML  = questions[i].question;
        if (input == questions[i].answer) {
            correct.innerHTML = correct + 1;
        }

    }
});


