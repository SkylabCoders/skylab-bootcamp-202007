import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Hello from './Hello';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
	<React.StrictMode>
		<Hello />
	</React.StrictMode>,
	document.getElementById('root')
);

serviceWorker.unregister();
