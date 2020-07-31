import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Hello from './Hello';
import Sum from './Sum';
import Clicker from './Clicker';
import MyButton from './MyButton'
import ConditionalDisplay from './ConditionalDisplay';

const myAttribute = {
  a: 4,
  b: 2
}
const myLastName = ["G", "E", "M", "A"];
ReactDOM.render(
  <React.StrictMode>
    <Hello />
    <Clicker
      MyButton={MyButton}
      handleClick={(letter) => console.log(letter)}
      data={myLastName} />
    <ConditionalDisplay isVisible={true}>
      {/* react agafa h1 y p y es com el children de props de ConditionalDisplay. Al momento de la reconciliación els afaga com a children.
      Props.children son els elements que anida quan isVisible es true*/}
      <h1>Hello</h1>
      <p>world!</p>
    </ConditionalDisplay>

  </React.StrictMode >,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
