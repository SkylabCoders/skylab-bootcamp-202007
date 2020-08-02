import React from 'react';
import './QuizQuestion.css';
import example from './../assets/img/quiz1.jpg';

function QuizQuestion(props){
    let quizData = props.quizData;
    return(
        <section>
            <h2>JavaScript Quiz</h2>
            <div class="question__container">
                <p>{quizData[0].question}</p>
                <div class="question__body">
                    <img class="question__image" src={example} alt="imagequiz1"/>
                    <div class="question__answers">
                        <p>{quizData[0].options[0]}</p>
                        <p>{quizData[0].options[1]}</p>
                        <p>{quizData[0].options[2]}</p>
                        <p>{quizData[0].options[3]}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default QuizQuestion;