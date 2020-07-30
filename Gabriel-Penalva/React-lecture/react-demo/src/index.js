import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Hello from './Hello';
import Sum from './Sum';
import Clicker from './Clicker'
import MyButton from './MyButton';
import ConditionDisplay from './conditionDisplay';

const Atributes = { a: 0.1, b: 0.2 }
const nombre = ['G', 'A', 'B', 'R', 'I', 'E', 'L'];

function printC(letter) {
  console.log(letter);
}
ReactDOM.render(
  <React.StrictMode>
    <Hello />
    {/* <Sum
      a={9}
      b={3} 
    /> */}
    {React.createElement('div', null, React.createElement(Sum, { ...Atributes }, null))}
    <Clicker
      handleClick={printC}
      MyButton={MyButton}
      nombre={nombre} />

    <ConditionDisplay isVisible={false} >
      <h1>Hello</h1> <p>World</p>
    </ConditionDisplay>

  </React.StrictMode>,
  document.getElementById('root')
);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
