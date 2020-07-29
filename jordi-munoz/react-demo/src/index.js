import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Hello from './Hello';

setInterval(() => {
  ReactDOM.render(
    <React.StrictMode>
      <Hello now={new Date().toISOString()}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
}, 1000);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
