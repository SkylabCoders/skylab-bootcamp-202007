import React from 'react';
import logo from './logo.svg';
import './App.css';

function App({ clicks, clickChange, resetCounter}) {

return <div onClick={clickChange} onMouseLeave={resetCounter}>This div has been clicked {clicks} times!</div>;
}

export default App;
