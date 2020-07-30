import React from 'react';
import logo from './logo.svg';
import './App.css';

function App({ clicks, clickChange, resetClick }) {
  return <div onClick={clickChange} onMouseLeave={resetClick}>This div has been clicked {clicks} times!</div>
}

export default App;
