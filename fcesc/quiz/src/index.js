import React from 'react';
import ReactDOM from 'react-dom';
import './css/styles.css';
import Header from './components/Header';
import Footer from './components/Footer';
import QuizQuestion from './components/QuizQuestion';
import getQuizData from './services/QuizService.js';
import * as serviceWorker from './serviceWorker';


let timer = 0;
let appData = {
  site: 'Quiz',
  created: getDate(),
  author: 'Francesc Brugarolas',
  title: 'Superquiz',
  bootcamp: 'Skylab bootcamp 202007',
  moto: 'Landing on React'
}
let quizData = getQuizData();

function getDate(){
  const now = {full: new Date()};
  now.year = now.full.getFullYear();
  now.month = now.full.getMonth() + 1;
  now.day = now.full.getDate();
  now.hour = now.full.getHours();
  now.minutes = now.full.getMinutes();
  return now;
}
const today = getDate();

function reRender(){
    ReactDOM.render(
      <React.StrictMode>
        <body>
          <Header
            appData={appData}
            timer={timer} 
            date={today}
          />
          <QuizQuestion
            quizData={quizData}
          />
          <Footer
            appData={appData}
          />
        </body>
      </React.StrictMode>,
      document.getElementById('root')
    );
}

setInterval(()=>{timer++},1000);
setInterval(reRender, 1000);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
