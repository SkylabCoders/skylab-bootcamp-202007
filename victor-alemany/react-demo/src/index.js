import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Hello from './Hello';
import Sum from './Sum';

ReactDOM.render(
  <React.StrictMode>
    <Hello />
    <Sum a={4} b={2} />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
