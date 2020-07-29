import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//Since REACT is almost Pure JS, we can work as-is
let counter = 0;
function updateCounter(newValue) {
	counter = newValue;
	render();
}

function render() {
	ReactDOM.render(
		<React.StrictMode>
			<App
				clicks={counter}
				clickChange={() => updateCounter(++counter)}
				mouseOutEvent={() => updateCounter(0)}
				//mouseOverCounter={mouseOverCounter}
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
