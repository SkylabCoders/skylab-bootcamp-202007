import React from 'react';
import ReactDOM from 'react-dom';
import Sum from './Sum';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Sum a={4} b={2}/>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
