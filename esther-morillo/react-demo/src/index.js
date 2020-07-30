import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import Sum from './Sum'
import Clicker from './Clicker'
import MyButton from './MyButton';



const myAttributes = {
  a: 4,
  b: 2
}

  ReactDOM.render(
    <React.StrictMode>
     
      
      <Clicker 
      MyButton={MyButton}
      handleClick= {(letter) => console.log(letter)}/>    

    </React.StrictMode>,
    document.getElementById('root')
  );



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
