/*
Haz el juego del Pasapalabra, el programa deberá lanzar la definición de una palabra y el usuario deberá adivinar qué palabra estamos tratando, por ejemplo:
'>>>'With the letter "M", Capital of Spain, located in the center of the country.
'>>>' "Madrid"
'>>>'Correct, you have 1 Point!

Tu juego debería hacer una pregunta por cada letra del alfabeto, al final del juego, y habiendo respondido todas las letras, deberá indicarle al usuario cuantas letras ha fallado y cuántas ha acertado. Si el usuario responde con "pasapalabra" el juego deberá estar preparado para entender que en ese momento, el usuario no responderá esa pregunta, y no estará acertada ni fallada, la dejará para la siguiente ronda. El juego deberá, cuando finalice, mostrar un ranking de usuarios con el nombre y ordenados por cantidad de letras acertadas.
*/
/*FALTA
Rankings
*/
var ranking = [
    ["Maria",25],
    ["John",22]
];

function pasapalabra() {
    var questions = [
        //it contains the info at the folowing order, first the question, secondly the answer, last the state which change when the user answer the question
        ["pregunta1","RESPUESTA1","NONE"],
        ["pregunta2","RESPUESTA2","NONE"],
    ];
     var userName = prompt("Which will be your username?");
    do{
        for (var i = 0; i < questions.length; i++) {
            /*IDEA: el array questions tiene dentro otros array con la pregunta y e esado acertada, fallada o ninguna cuando hacemos apsapaabra quedara en ninguna y se recorera de nuevo
            si falla el estado cabia y podemos usar eso pra contabilizar loa aciertos y fallos en funciones aparte */
            if (questions[i][2]=="NONE") {
                console.log(questions[i][0]);
                var userAnswer= prompt(questions[i][0]);
                if (userAnswer.toUpperCase()!=="PASAPALABRA" ) {
                    if(userAnswer.toUpperCase()===questions[i][1]){
                        questions[i][2]="PASS";
                        console.log("Correct, you have "+counter(questions,"PASS")+" Point!");}
                    else{
                        questions[i][2]="FAIL"
                        console.log("Sorry, that is not correct :(");
                    }
                }
            }
        }
    }while(checkQuestions(questions))
    rankingPlacement(questions,userName);
    console.log("Your final score is, "+counter(questions,"PASS")+" passed and "+counter(questions, "FAIL")+" failed.")
    for (let j = 0; j < ranking.length; j++) {
        console.log(ranking[i][0]+" has "+ranking[i][1]+" points \n");            
    }
}
//Checks if there is a question without an user answer
function checkQuestions(questions) {
    var checker=false;
    for (var i = 0; i < questions.length; i++) {
        if (questions[i][2]==="NONE") {
            checker=true;
        }
    }
    return checker;
}
function rankingPlacement(questions,userName){
    var score=counter(questions,"PASS");
    for (var i = 0; i < ranking.length; i++) {
        var a= ranking[i]
        if(ranking[i][1] < score){
            ranking.splice(i,0,[userName, score]);
            return;
        }
    }
    ranking.push([userName, score])
}
// Counts the number of passed or failed questions
function counter(questions,status) {
    var counter=0;
    for (var i = 0; i < questions.length; i++) {
        if (questions[i][2]===status) counter++; 
    }
    return counter;
    
}
pasapalabra();