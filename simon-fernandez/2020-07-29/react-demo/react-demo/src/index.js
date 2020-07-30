import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import GetDate from './Date';
import Hello from './Hello';
import Sum from './sum';
import * as serviceWorker from './serviceWorker';

const myAtributes = {
	a: 4,
	b: 2
};

ReactDOM.render(
	<React.StrictMode>
		<Sum {...myAtributes} />
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
