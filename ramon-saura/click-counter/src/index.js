import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let counter = 0;

function updateCounter(newValue) {
	counter = newValue || 0;
	render();
}
function render() {
	ReactDOM.render(
		<React.StrictMode>
			<App
				clicks={counter}
				clickChange={() => {
					updateCounter(++counter);
				}}
				reset={() => {
					updateCounter();
				}}
			/>
		</React.StrictMode>,
		document.getElementById('root')
	);
}
render();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
