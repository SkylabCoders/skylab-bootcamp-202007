import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import Hello from './Hello';
//import Sum from './Sum';
import * as serviceWorker from './serviceWorker';
import ConditionalDisplay from './ConditionalDisplay';
//import Clicker from './Clicker';
//import MyButton from './MyButton';
import Hello from './Hello2';

//const myAttributes = { a: 6, b: 7 };

//const { a } = myAttributes;

//setInterval(() => {
ReactDOM.render(
	<React.StrictMode>
		{/* 		<Clicker
			MyButton={MyButton}
			handleClick={(letter) => console.log(letter)}
		/> */}
		<ConditionalDisplay isVisible={false}>
			<h1>Hello</h1>
			<p>world!</p>
		</ConditionalDisplay>
		<Hello />
	</React.StrictMode>,
	document.getElementById('root')
);
//}, 1000);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
