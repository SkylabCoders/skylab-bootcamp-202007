import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Hello from './Hello';
import Sum from './Sum';
import Clicker from './Clicker';
import * as serviceWorker from './serviceWorker';
import ConditionalDisplay from './ConditionalDisplay';

const myLastName = ['P', 'A', 'B', 'L', 'O'];

ReactDOM.render(
	<React.StrictMode>
		<Hello />
		<Sum a={4} b={2} />
		<Clicker handleClick={(letter) => console.log(letter)} />
		<ConditionalDisplay isVisible={true}>
			<h1>Hello</h1>
			<p>World</p>
		</ConditionalDisplay>
	</React.StrictMode>,
	document.getElementById('root')
);

serviceWorker.unregister();
