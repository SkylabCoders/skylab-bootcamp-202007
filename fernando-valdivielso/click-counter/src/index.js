import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let counter = 0;
function updateCounter(newValue) {
  counter = newValue || 0; //si newValue es null/undefined, counter vale 0
  render(); //funcion que tenemos que crear para que nos pinte el html (creada en linea 15)
}



function render() {  //esta funcion envuelve el ReactDOM.render(), que pinta el html
  ReactDOM.render(
    <React.StrictMode>
      <App
        clicks={counter}
        clickChange={() => updateCounter(++counter)}
        leaveArea={() => updateCounter()}  //funcion que llama a updateCounter 
      />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

render();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
