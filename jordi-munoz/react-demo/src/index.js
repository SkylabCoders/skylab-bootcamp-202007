import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Hello from './Hello';
import Sum from './Sum';
import Clicker from './Clicker';
import MyButton from './MyButton';
import ConditionalDisplay from './ConditionalDisplay';

const myAttributes = {
  a: 4,
  b: 2
}
const myLastName = ['C', 'A', 'O', 'L'];

ReactDOM.render(

  <React.StrictMode>
    <Hello />
    <Sum {...myAttributes} />
    <Clicker
      MyButton={MyButton}
      data={myLastName}
    />
    <ConditionalDisplay isVisible={true}>
      <h1>Hello</h1>
      <p>world!</p>
    </ConditionalDisplay>
  </React.StrictMode>,
  document.getElementById('root')
);




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
