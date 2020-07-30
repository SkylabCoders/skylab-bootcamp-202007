import React from 'react';
import logo from './logo.svg';
import './App.css';

function App(props) {
  let min = 0;
  let sec = 0;
  if (props.timer > 60){
    min = formater(parseInt(props.timer / 60));
    sec = formater(props.timer % 60);
  } else {
    sec = formater(props.timer);
  }
  function formater(num){
    return (num < 10) ? num = '0' + num : num;
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>skylab bootcamp 202007 - messing around with react: #what's this?</p>
        <div onClick={props.click} onMouseLeave={props.hover} onMouseOver={props.over}>
          <p>App started on {props.date.day}/{props.date.month}/{props.date.year} @ {props.date.hour}:{props.date.minutes}. Time since start: {min}:{sec}.</p>
          <p>This {'<'}div{'>'} has been clicked {props.clickCounter} times, mouse left {props.hoverCounter} times and mouse hovered {props.overCounter}!</p>
        </div>
        <div onClick={props.clickToReset}>
          <p>Click here to reset all mouse counters</p>
        </div>
        <a
          href="https://www.skylabcoders.com/es/"
        >
          skylab
        </a>
      </header>
      <p>This is some text outside the header. Yikes.</p>
    </div>
  );
}

export default App;
