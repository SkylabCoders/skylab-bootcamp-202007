import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Clicker from './Clicker'
import MyButton from './MyButton';

const myLastName = ['V','I','C','T','O','R'];

ReactDOM.render(
  <React.StrictMode>
<Clicker MyButton={MyButton} handleClick={(letter)=>console.log(letter)} data={myLastName}/>

  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
