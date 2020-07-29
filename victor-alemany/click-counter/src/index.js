import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let counter = 0;

function handleUpdateCounter(newValue){
  counter = newValue || 0;
  render();
}

function render() {
  ReactDOM.render(
    <React.StrictMode>
      <App clicks={counter} clickChange={()=>handleUpdateCounter(++counter)} resetCounter={()=>handleUpdateCounter()}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
}
render();

serviceWorker.unregister();
