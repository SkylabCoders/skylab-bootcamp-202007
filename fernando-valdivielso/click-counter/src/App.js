import React from 'react';
import logo from './logo.svg';
import './App.css';

function App({ clicks, clickChange, leaveArea }) {
  return (
    <div onClick={clickChange} onMouseOut={leaveArea}>
      This div has been clicked {clicks} times!
    </div>
  )

}

export default App;
