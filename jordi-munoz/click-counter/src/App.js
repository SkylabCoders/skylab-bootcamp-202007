import React from 'react';
import './App.css';

function App({ clicks, clickChange, mouseLeave }) {
  return <div onClick={clickChange} onMouseLeave={mouseLeave}>This div has been clicked {clicks} times!</div>;

}

export default App;
