import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import ConditionalDisplay from './ConditionalDisplay';

ReactDOM.render(
	<React.StrictMode>
		<ConditionalDisplay isVisible={true}>
			<h1>Hello</h1>
			<p>world!</p>
		</ConditionalDisplay>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
