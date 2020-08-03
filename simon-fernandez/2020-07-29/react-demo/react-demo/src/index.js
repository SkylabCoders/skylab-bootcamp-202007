import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import GetDate from './Date';

import Hello from './Hello';
import Sum from './sum';
import Clicker from './Clicker';
import * as serviceWorker from './serviceWorker';
import MyButton from './myButton';
import ConditionalDisplay from './conditionalDisplay';

const myAtributes = {
	a: 4,
	b: 2
};
const myLastName = ['A', 'B', 'C'];
ReactDOM.render(
	<React.StrictMode>
		<ConditionalDisplay isVisible={true}>
			<h1>hello</h1>
			<p>world!</p>
		</ConditionalDisplay>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
