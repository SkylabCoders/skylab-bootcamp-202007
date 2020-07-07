//PASAPALABRA CHALLENGE
//Initialize some variables to store data
let userName = "";

//Initialize an Array of Objects containing Q&A
var donut = [
    { letter: "A", status: 0, question: "Wich known cream should you use after a sunburn?", answer: "aftersun" },
    { letter: "B", status: 0, question: "Wich musician wrote 9th Synfony?", answer: "beethoven" },
    { letter: "C", status: 0, question: "How is it called the urban normal outfit?", answer: "casual" },
    { letter: "D", status: 0, question: "In wich country is located Copenhagen?", answer: "Denmark" },
   //{ letter: "E", status: 0, question: "Famour white-skin rapper", answer: "eminem" },
   //{ letter: "F", status: 0, question: "Place where in the past was known as the end of the land on earth", answer: "finisterre" },
   //{ letter: "G", status: 0, question: "Indonesian god who looks like a bird", answer: "garuda" },
   //{ letter: "H", status: 0, question: "Nickname of a famous TV show dealer of a blue colored drug", answer: "heisenberg" },
   //{ letter: "I", status: 0, question: "What you are when you text your girlfriend while drunk", answer: "idiot" },
   //{ letter: "J", status: 0, question: "Father of all Martial-Arts", answer: "jiujitsu" },
   //{ letter: "K", status: 0, question: "Horse anesthetic wich is used recreationally", answer: "ketamine" },
   //{ letter: "L", status: 0, question: "Homeland of Gadafi", answer: "lebanon" },
   //{ letter: "M", status: 0, question: "Combat Sport from Thailand", answer: "muaythai" },
   //{ letter: "N", status: 0, question: "Voldemort's snake's nickname", answer: "nagini" },
   //{ letter: "Ñ", status: 0, question: "Spain's name in its original form", answer: "españa" },
    //{ letter: "O", status: 0, question: "", answer: "" },
    //{ letter: "P", status: 0, question: "", answer: "" },
    //{ letter: "Q", status: 0, question: "", answer: "" },
    //{ letter: "R", status: 0, question: "", answer: "" },
    //{ letter: "S", status: 0, question: "", answer: "" },
    //{ letter: "T", status: 0, question: "", answer: "" },
    //{ letter: "U", status: 0, question: "", answer: "" },
    //{ letter: "V", status: 0, question: "", answer: "" },
    //{ letter: "W", status: 0, question: "", answer: "" },
    //{ letter: "X", status: 0, question: "", answer: "" },
    //{ letter: "Y", status: 0, question: "", answer: "" },
    //{ letter: "Z", status: 0, question: "", answer: "" },

]

//function pasaPalabra() {
//    rollDonut();
//}


function rollDonut() {
    let correctAnswers = 0;
    let wrongAnswers = 0;
    do {
        for (i = 0; i < donut.length; i++) {
            if (donut[i].status === 0) {
                console.log("With letter " + donut[i].letter + ": " + donut[i].question)
            }
            let userAnswer = prompt("Enter you answer here")
            userAnswer.toLowerCase
            if (userAnswer === donut[i].answer) {
                console.log("Correct!")
                correctAnswers++;
                donut[i].status = 1;

            }
            else if (userAnswer === "pasapalabra") {
                console.log("You get to next one.")

            }

            else if (userAnswer != donut[i].answer) {
                console.log("Wrong!! correct answer was: " + donut[i].answer)
                donut[i].status = 2;
                wrongAnswers++

            }
            else {
                console.log("So sad you don't wanna play mate. Bye")
                return
            }
        }

    }
    while (checkAnswerStatus())

    console.log("Game finished!! You got " + correctAnswers + " correct answers, and you got " + wrongAnswers + " wrong, well done!")
}

//function to check that all question have been ANSWERED no matter OK or NOK
function checkAnswerStatus() {
    let isDone = false;
    for (i = 0; i < donut.length; i++) {
        while (donut[i].stauts === 0) {
            isDone = true
        }
       
    }
    return isDone;

}
//roll the dice
rollDonut();