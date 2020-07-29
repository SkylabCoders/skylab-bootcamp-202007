import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { render } from '@testing-library/react';
let counter = 0;

function updateCounter(newValue) {
  counter = newValue || 0;
  renderAgain();
}

function renderAgain() {
  ReactDOM.render(
    <React.StrictMode>
      <App
        clicks={counter}
        clickChange={() => updateCounter(++counter)}
        resetCounter={() => updateCounter()}
      />
    </React.StrictMode>,
    document.getElementById('root')
  );
}
renderAgain();
renderAgain();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
