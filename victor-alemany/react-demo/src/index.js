import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import ConditionalDisplay from './ConditionalDisplay'
//import Clicker from './Clicker'
//import MyButton from './MyButton';
/*
const myLastName = ['V','I','C','T','O','R'];

ReactDOM.render(
  <React.StrictMode>
<Clicker MyButton={MyButton} handleClick={(letter)=>console.log(letter)} data={myLastName}/>

  </React.StrictMode>,
  document.getElementById('root')
);*/

ReactDOM.render(
  <React.StrictMode>
    <ConditionalDisplay isVisible={true}>
    <h1>Hello</h1>
    <p>World!</p>
    </ConditionalDisplay>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
