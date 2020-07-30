import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import GetDate from './Date';
import Sum from './sum';

ReactDOM.render(
	<React.StrictMode>
		<GetDate />
		{/*JSX*/}
		<Sum a={NaN} b={2} />
		{/*JS*/}
		{React.createElement('div', null, React.createElement(Sum, { a: 5, b: 2 }))}
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
