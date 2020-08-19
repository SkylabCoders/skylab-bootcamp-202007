var questions = [
	{
		letter: 'a',
		answer: 'abducir',
		status: 0,
		question:
			'CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien'
	},

	{
		letter: 'b',
		answer: 'bingo',
		status: 0,
		question:
			"CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso"
	},

	{
		letter: 'c',
		answer: 'churumbel',
		status: 0,
		question: 'CON LA C. Niño, crío, bebé'
	},

	{
		letter: 'd',
		answer: 'diarrea',
		status: 0,
		question:
			'CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida'
	},

	{
		letter: 'e',
		answer: 'ectoplasma',
		status: 0,
		question:
			'CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación'
	},

	{
		letter: 'f',
		answer: 'facil',
		status: 0,
		question: 'CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad'
	},

	{
		letter: 'g',
		answer: 'galaxia',
		status: 0,
		question:
			'CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas'
	},

	{
		letter: 'h',
		answer: 'harakiri',
		status: 0,
		question: 'CON LA H. Suicidio ritual japonés por desentrañamiento'
	},

	{
		letter: 'i',
		answer: 'iglesia',
		status: 0,
		question: 'CON LA I. Templo cristiano'
	},

	{
		letter: 'j',
		answer: 'jabali',
		status: 0,
		question:
			"CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba"
	},

	{
		letter: 'k',
		answer: 'kamikaze',
		status: 0,
		question:
			'CON LA K. Persona que se juega la vida realizando una acción temeraria'
	},

	{
		letter: 'l',
		answer: 'licantropo',
		status: 0,
		question: 'CON LA L. Hombre lobo'
	},

	{
		letter: 'm',
		answer: 'misantropo',
		status: 0,
		question:
			'CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas'
	},

	{
		letter: 'n',
		answer: 'necedad',
		status: 0,
		question: 'CON LA N. Demostración de poca inteligencia'
	},

	{
		letter: 'ñ',
		answer: 'señal',
		status: 0,
		question:
			'CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo.'
	},

	{
		letter: 'o',
		answer: 'orco',
		status: 0,
		question:
			'CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien'
	},

	{
		letter: 'p',
		answer: 'posidonia',
		status: 0,
		question:
			'CON LA P. Planta acuática, endémica del Mediterráneo. Forma praderas submarinas que protejen la linea de la costa de la erosión. Es considerada un bioindicador de calidad de las aguas marinas costeras.'
	},

	{
		letter: 'q',
		answer: 'queso',
		status: 0,
		question:
			'CON LA Q. Producto obtenido por la maduración de la cuajada de la leche'
	},

	{ letter: 'r', answer: 'raton', status: 0, question: 'CON LA R. Roedor' },

	{
		letter: 's',
		answer: 'subduccion',
		status: 0,
		question:
			'CON LA S. Proceso geológico asociado a la convergencia de placas litosféricas según el cual una placa se hunde bajo otra contigua.'
	},

	{
		letter: 't',
		answer: 'terminator',
		status: 0,
		question:
			'CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984'
	},

	{
		letter: 'u',
		answer: 'unamuno',
		status: 0,
		question:
			"CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914"
	},

	{
		letter: 'v',
		answer: 'vikingos',
		status: 0,
		question:
			'CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa'
	},

	{
		letter: 'w',
		answer: 'sandwich',
		status: 0,
		question:
			'CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso'
	},

	{
		letter: 'x',
		answer: 'botox',
		status: 0,
		question: 'CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética'
	},

	{
		letter: 'y',
		answer: 'peyote',
		status: 0,
		question:
			'CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal  por indígenas americanos'
	},

	{
		letter: 'z',
		answer: 'zen',
		status: 0,
		question:
			'CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional'
	}
];

var points = 0;
var errors = 0;
var num = 0;

var name = prompt('Bienvenido a pasapalabra. ¿Como te llamas?');
confirm(
	"Deberás escribir las respuestas con todas las letras en minúscula, de lo contrario será contabilizado como respuesta errónea. Para dejar la pregunta para la siguiente ronda escribe 'pasapalabra'. Listo para empezar el juego? Vamos allá!"
);

function run() {
	for (num; num < questions.length; num++) {
		if (questions[num].status === 0) {
			var respuesta = prompt(questions[num].question);
			if (questions[num].answer === respuesta) {
				points++;
				questions[num].status++;
				console.log('Correcto, tienes un punto!');
			} else if (respuesta === 'pasapalabra') {
				continue;
			} else {
				errors++;
				questions[num].status++;
				console.log(
					`No es correcto. La respuesta correcta es ${questions[num].answer}.`
				);
			}
		} else {
			continue;
		}
	}
}

run();

for (let pregStatus in questions) {
	if (questions[pregStatus].status === 0) {
		num = 0;
		run();
	} else {
		continue;
	}
}

console.log(
	`${name} has acertado ${points} palabras, y has fallado ${errors}. Tu puntuación total es de ${
		points - errors
	} puntos!`
);
