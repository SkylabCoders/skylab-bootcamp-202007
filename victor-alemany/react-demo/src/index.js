import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Hello from './Hello';

setInterval(()=>{
ReactDOM.render(
  <React.StrictMode>
    <Hello now={new Date().toISOString()} />
  </React.StrictMode>,
  document.getElementById('root')
);
},1000);

serviceWorker.unregister();
