import React from 'react';
import ReactDOM from 'react-dom';
import Sum from './Sum';
import * as serviceWorker from './serviceWorker';


const props = {
  a:2,
  b: 4
}
ReactDOM.render(
  <React.StrictMode>
    <Sum {...props}/>
 {/*    {React.createElement(Sum,{a:3,b:3},null)}
    {React.createElement('h2',null,React.createElement(Sum,{a:7,b:1},null))} */}

  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
