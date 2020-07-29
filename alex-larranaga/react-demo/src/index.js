import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HeaderComponent from './HeaderComponent.js';
import * as serviceWorker from './serviceWorker';

setInterval(() => {
	ReactDOM.render(
		<React.StrictMode>
			<HeaderComponent now={new Date().toString()} />
		</React.StrictMode>,
		document.getElementById('root')
	);
}, 1000);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
