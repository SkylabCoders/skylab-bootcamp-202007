import React from 'react';
import ReactDOM from 'react-dom';
import './bootstrap.min.css';
import './index.css';
import Toh from './tho';
import List from './toh-list';
import Detail from './tho-details';
import Dashboard from './tho-dashboard';
import * as serviceWorker from './serviceWorker';
import { render } from '@testing-library/react';

let checked = <Dashboard />;
function changeComponents(newValue) {
	checked = newValue || <Dashboard />;
	print();
}
function print() {
	ReactDOM.render(
		<React.StrictMode>
			<Toh
				main={checked}
				dashboard={() => {
					changeComponents(<Dashboard />);
				}}
				detail={() => {
					changeComponents(<Detail />);
				}}
				list={() => {
					changeComponents(<List />);
				}}
			/>
		</React.StrictMode>,
		document.getElementById('root')
	);
}
print();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
