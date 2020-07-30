import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Sum from './Sum';

const myAttributes = {
	a: 2,
	b: 4
};

ReactDOM.render(
	<React.StrictMode>
		<Sum {...myAttributes} />
		{/* <Sum a={4} b={2} />
		{React.createElement(Sum, { a: 4, b: 2 }, null)}
		{React.createElement(
			'h1',
			null,
			React.createElement(Sum, { a: 4, b: 2 }, null)
		)} */}
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
