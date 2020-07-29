import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let counter = 0;

function updateCounter(newValue) {
	counter = newValue || 0;
	renderB();
}
function renderB() {
	ReactDOM.render(
		<React.StrictMode>
			<App
				clicks={counter}
				clickChange={() => updateCounter(++counter)}
				resetCounter={() => updateCounter(0)}
			/>
		</React.StrictMode>,
		document.getElementById('root')
	);
}
renderB();

serviceWorker.unregister();
