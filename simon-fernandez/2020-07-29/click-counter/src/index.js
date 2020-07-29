import React from 'react';
import ReactDOM, { render } from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let counter = 0;
function handleClickChange() {
	++counter;
	renderAgain();
}
function resetCounter() {
	counter = 0;
	renderAgain();
}
function renderAgain() {
	ReactDOM.render(
		<React.StrictMode>
			<App
				clicks={counter}
				clickChange={handleClickChange}
				resetCounter={resetCounter}
			/>
		</React.StrictMode>,
		document.getElementById('root')
	);
}
renderAgain();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
