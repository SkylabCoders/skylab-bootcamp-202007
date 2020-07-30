import React from 'react';
import ReactDOM, { render } from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let clickCounter = 0;
let hoverCounter = 0;
let overCounter = 0;
let counter = 0;

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

function resetClickCounter(){
  clickCounter = 0;
  hoverCounter = 0;
  overCounter = 0;
}

function reRender(){
    ReactDOM.render(
      <React.StrictMode>
        <App 
          click={()=>{clickCounter++; reRender()}} 
          hover={()=>{hoverCounter++; reRender()}}
          over={()=>{overCounter++; reRender()}}
          clickToReset={()=>{resetClickCounter(); reRender()}}
          clickCounter={clickCounter} 
          hoverCounter={hoverCounter}
          overCounter={overCounter}
          timer={counter} 
          date={today}/>
      </React.StrictMode>,
      document.getElementById('root')
    );
}

setInterval(()=>{counter++},1000);
setInterval(reRender, 1000);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
