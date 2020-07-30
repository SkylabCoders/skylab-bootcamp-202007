import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import Hello from './Hello';
import Sum from './Sum';
import * as serviceWorker from './serviceWorker';

const myAttributes = { a: 6, b: 7 };

const { a } = myAttributes;

//setInterval(() => {
ReactDOM.render(
	<React.StrictMode>
		<Hello /*now={new Date().toISOString()}*/ />
		<Sum a={'key'} b={2} />
		{React.createElement(Sum, { a: 4, b: 2 })}
		{React.createElement(
			'h1',
			null,
			React.createElement(Sum, { a: 4, b: 7 }, null)
		)}
		<Sum {...myAttributes} />
	</React.StrictMode>,
	document.getElementById('root')
);
//}, 1000);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
