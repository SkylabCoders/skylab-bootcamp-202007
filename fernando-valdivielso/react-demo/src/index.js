import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Hello from './Date';
import Sum from './Sum'
import Clicker from './Clicker'
import MyButton from './MyButton'
import ConditionalDisplay from './ConditionalDisplay'

// setInterval(() => {
//   ReactDOM.render(
//     <React.StrictMode>
//       <Hello now={new Date().toISOString()} x='algo' />
//     </React.StrictMode>,
//     document.getElementById('root')
//   );
// }, 100);


ReactDOM.render(
  <React.StrictMode>
    <Hello />
    {/* <Sum a={4} b={2} /> //JSX */}
    {React.createElement(
      'h1',
      null,
      React.createElement( // hijo de <h1>
        Sum,
        { a: 4, b: 3 },
        null
      )
    )}
    <Clicker
      MyButton={MyButton}
      handleClick={(letter) => console.log(letter)}
    />

    {/* //al cambiar true por false, se deja de ver el elemento */}
    <ConditionalDisplay isVisible={true}>
      <h1>Hello</h1>
      <p>World</p>
    </ConditionalDisplay>
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
