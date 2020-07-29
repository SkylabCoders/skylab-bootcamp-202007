import React from 'react';
import './App.css';

function App({ clicks, clickChange, resetToCero }) {
  return <div onClick={clickChange} onMouseLeave={resetToCero}> This div has been clicked {clicks} times!!</div>;
}

export default App;
